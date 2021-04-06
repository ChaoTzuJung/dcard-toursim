import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import useMedia from 'use-media';

import API from 'API';
import { API_POST_LIMIT } from 'config';
import { ICheckbox } from 'types';
import { screen } from 'utils/media';
import CardList from 'components/CardList';
import Filter from 'components/Filter';
import Result from 'components/Result';
import { S } from './styled';


const Home: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const pathname: string | undefined = location.pathname.split('/')[2];
    let city: string = pathname || '';

    const {
        data,
        isLoading,
        isFetching,
        fetchNextPage,
        hasNextPage,
        error,
        refetch,
    } = useInfiniteQuery(
        `tourism-${city}`, ({ pageParam, queryKey }) => API.fetchTouristSpot(pageParam, city),
        {
            // give react-query the next page, so it know how to fetch the next page.
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.length < API_POST_LIMIT) return undefined;
                const newPage = pages.length - 1 as number;
                return newPage + 1;
            },
        });

    const getMore = () => {
        // usually check for next cursor
        if (data?.pages[0] && data.pages[0].length < API_POST_LIMIT) return;
        // Pass a new value into cb of useInfiniteQuery, state hook will not be updated in time
        fetchNextPage();
    };

    const [checkbox, setCheckbox] = useState<ICheckbox>({
        '其他': false,
        '觀光工廠類': false,
        '體育健身類': false,
        '遊憩類': false,
        '都會公園類': false,
        '森林遊樂區類': false,
        '文化類': false,
        '自然風景類': false,
        '生態類': false,
    });
    const isMobile = useMedia({ maxWidth: screen.mobile })

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
    }

    const handleTagClose = (text: string) => {
        setCheckbox({ ...checkbox, [text]: false });
    }

    useEffect(() => {
        refetch();
        if(!pathname) {
            history.push("/scenicSpot");
        }
    }, [pathname, history, refetch])

    const tourismList = data?.pages.reduce((prev, curr) => prev.concat(curr));

    if(error) return <p>Error......</p>

    return (
        <S.Wrapper>
            <div className="sidebar">
                <Filter
                    onCheckboxChange={handleCheckboxChange}
                    checkbox={checkbox}
                />
            </div>
            <div className="list-container">
                {<>
                    {!isMobile && (
                    <Result
                        data={tourismList}
                        tags={checkbox}
                        onClick={handleTagClose}
                    />)}
                    <CardList
                        data={tourismList}
                        loading={isLoading}
                        fetching={isFetching}
                        hasMore={hasNextPage}
                        getMore={getMore}
                    />
                </>}
            </div>
        </S.Wrapper>
    );
}

export default Home;
