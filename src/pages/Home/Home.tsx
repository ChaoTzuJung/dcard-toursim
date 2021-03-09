import { S } from './styled';
import Filter from '../../components/Filter';
import Result from '../../components/Result';
import Card from '../../components/Card';

const locations = ['All', 'Entertainment', 'Food', 'Learning', 'Outdoors'];

const Home: React.FC = () => (
    <S.Wapper>
        <div className="sidebar">
            <Filter />
        </div>
        <div className="list-container">
            <Result tags={locations} />
            <Card />
        </div>
    </S.Wapper>
);

export default Home;