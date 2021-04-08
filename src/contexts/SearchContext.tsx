import React, { useState, useContext } from 'react';

type QueryState = {
    query: string | undefined,
    setQuery: React.Dispatch<React.SetStateAction<string | undefined>>
}

// @ts-ignore
const SearchContext = React.createContext<QueryState>();

export const useSearch = () => {
    return useContext(SearchContext);
}

const SearchProvider: React.FC = ({ children }) => {
    const [query, setQuery] = useState<string | undefined>("")
    return (
        <SearchContext.Provider value={{ query, setQuery }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;
