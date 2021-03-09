import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { S } from './styled';

const Header: React.FC = () => (
    <S.Header>
        <S.Navigation>
            <div className="bar">
                <S.Logo>
                    <Link to="/">Have Fun</Link>
                </S.Logo>
            </div>
            <div className="sub-bar">
                <div className="search-bar">
                    <SearchIcon style={{ fontSize: 27, color: '#FFFFFF' }} />
                    <S.Input type="text" placeholder="Explore your own activities" />
                </div>
            </div>
        </S.Navigation>
    </S.Header>
);

export default Header;