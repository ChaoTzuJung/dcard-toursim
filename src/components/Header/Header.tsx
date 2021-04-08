import React, { useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from 'react-router-dom';
import useMedia from 'use-media';
import SearchIcon from '@material-ui/icons/Search';

import { useSearch } from 'contexts/SearchContext';
import useFetchInfinitePost from 'hook/useFetchInfinitePost';
import Logo from 'images/logo.svg';
import { screen } from 'utils/media';
import { S } from './styled';

const Header: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const location = useLocation();
    const { query, setQuery } = useSearch()
    let isComposition = false;
    const pathname: string | undefined = location.pathname.split('/')[2];
    const city: string = pathname || '';
    const date = new Date().toUTCString();

    const { refetch } = useFetchInfinitePost(date, city, query);

    const isMobile = useMedia({ maxWidth: screen.mobile });

    const IconStyle = useMemo(() => {
        if (isMobile) {
            return { fontSize: 27, color: '#000000' };
        } else {
            return { fontSize: 27, color: '#FFFFFF' };
        }
    }, [isMobile]);

    const handleComposition = (e: React.CompositionEvent<HTMLInputElement>) => {
        if (e.type === 'compositionend') {
            isComposition = false;
            setQuery(e.currentTarget.value);
            return;
        } else {
            isComposition = true;
        }
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(inputRef.current) {
            inputRef.current.value = e.target.value;
        }

        if (!isComposition) {
            setQuery(e.target.value);
        }
    }

    useEffect(() => {
        if (query) {
            refetch();
        }
    }, [refetch, query]);

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
                            ref={inputRef}
                            type="text"
                            placeholder="Explore your own activities"
                            onChange={handleSearch}
                            onCompositionStart={handleComposition}
                            onCompositionEnd={handleComposition}
                        />
                    </div>
                </div>
            </S.Navigation>
        </S.Header>
    );
}


export default React.memo(Header);