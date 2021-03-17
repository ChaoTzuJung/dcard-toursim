import React, { useMemo } from "react";
import { Link } from 'react-router-dom';
import useMedia from 'use-media';
import SearchIcon from '@material-ui/icons/Search';
import Logo from 'images/logo.svg';

import { screen } from 'utils/media';
import { S } from './styled';

const Header: React.FC = () => {
    const isMobile = useMedia({ maxWidth: screen.mobile })
    const IconStyle = useMemo(() => {
        if (isMobile) {
            return { fontSize: 27, color: '#000000' };
        } else {
            return { fontSize: 27, color: '#FFFFFF' };
        }
    }, [isMobile]);
    return (
        <S.Header>
            <S.Navigation>
                <div className="bar">
                    <Link to="/">
                        <S.Logo src={Logo} alt="logo" />
                    </Link> 
                </div>
                <div className="sub-bar">
                    <div className="search-bar">
                        <SearchIcon style={IconStyle} />
                        <S.Input
                            type="text"
                            placeholder="Explore your own activities"
                        />
                    </div>
                </div>
            </S.Navigation>
        </S.Header>
    );
}


export default React.memo(Header);