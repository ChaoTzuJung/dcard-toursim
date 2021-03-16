import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { IfetchPostHook, ICheckbox } from '../../types';
import useFetchPost from '../../hook/useFetchPost';
import Filter from '../../components/Filter';
import Result from '../../components/Result';
import CardList from '../../components/CardList';
import { S } from './styled';

const Home: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const city: string | undefined = location.pathname.split('/')[2];
    const [lastId, setLastId] = useState<string | null>(null);
    const { posts, loading, error, hasMore }: IfetchPostHook = useFetchPost(city, lastId);
    const [checkbox, setCheckbox] = useState<ICheckbox>({
        其他: false,
        觀光工廠類: false,
        體育健身類: false,
        遊憩類: false,
        都會公園類: false,
        森林遊樂區類: false,
        文化類: false,
        自然風景類: false,
        生態類: false,
    });

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


    return (
        <S.Wrapper>
            <div className="sidebar">
                <Filter
                    onCheckboxChange={handleCheckboxChange}
                    checkbox={checkbox}
                />
            </div>
            <div className="list-container">
                {
                    <>
                        <Result
                            data={posts}
                            tags={checkbox}
                            onClick={handleTagClose}
                        />
                        <CardList
                            data={posts}
                            hasMore={hasMore}
                            setLastId={setLastId}
                            loading={loading}
                        />
                    </>
                }
            </div>
        </S.Wrapper>
    );
}

export default Home;
