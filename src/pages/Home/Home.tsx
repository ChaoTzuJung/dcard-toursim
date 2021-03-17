import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useMedia from 'use-media';

import { IFetchPostHook, ICheckbox } from 'types';
import { screen } from 'utils/media';
import useFetchPost from 'hook/useFetchPost';
import CardList from 'components/CardList';
import ErrorMessage from 'components/ErrorMessage';
import Filter from 'components/Filter';
import Result from 'components/Result';
import { S } from './styled';

const Home: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const city: string | undefined = location.pathname.split('/')[2];
    const [lastId, setLastId] = useState<string | null>(null);
    const { posts, loading, error, hasMore }: IFetchPostHook = useFetchPost(city, lastId);
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
        if(!city) {
            history.push("/scenicSpot");
        }
    }, [location.pathname])

    // if(error) return <ErrorMessage error={error} />
    if(error) return <p>Something goes wrong......</p>

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
                        data={posts}
                        tags={checkbox}
                        onClick={handleTagClose}
                    />)}
                    <CardList
                        data={posts}
                        loading={loading}
                        hasMore={hasMore}
                        setLastId={setLastId}
                    />
                </>}
            </div>
        </S.Wrapper>
    );
}

export default Home;
