import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useMedia from 'use-media';

import CardList from 'components/CardList';
import Filter from 'components/Filter';
import Result from 'components/Result';
import { API_POST_LIMIT } from 'config';
import { useSearch } from 'contexts/SearchContext';
import useFetchInfinitePost from 'hook/useFetchInfinitePost';
import { ICheckbox } from 'types';
import { screen } from 'utils/media';
import { S } from './styled';

const Home: React.FC = () => {
    const { query } = useSearch();
    const history = useHistory();
    const location = useLocation();
    const pathname: string | undefined = location.pathname.split('/')[2];
    let city: string = pathname || '';
    const date = new Date().toUTCString();
    
    const {
        data,
        isLoading,
        isFetching,
        fetchNextPage,
        hasNextPage,
        error,
        refetch,
    } = useFetchInfinitePost(date, city, query);


    const getMore = () => {
        if (data?.pages[0] && data.pages[0].length < API_POST_LIMIT) return;
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

    const tourism = data?.pages.reduce((prev: any, curr: any) => prev.concat(curr));

    if(error) return <p>Fetch Error: {error}</p>

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
                        data={tourism}
                        tags={checkbox}
                        onClick={handleTagClose}
                    />)}
                    <CardList
                        data={tourism}
                        loading={isLoading}
                        fetching={isFetching}
                        hasMore={hasNextPage && !Boolean(query)}
                        getMore={getMore}
                    />
                </>}
            </div>
        </S.Wrapper>
    );
}

export default Home;
