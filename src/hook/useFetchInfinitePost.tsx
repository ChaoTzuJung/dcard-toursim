import { useInfiniteQuery } from 'react-query';
import { API_POST_LIMIT } from 'config';
import API from 'API';

const useFetchInfinitePost = (city?: string, query?: string) => {
    const {
        data,
        isLoading,
        isFetching,
        fetchNextPage,
        hasNextPage,
        error,
        refetch,
    } = useInfiniteQuery(
        [`search-${city}`, query], ({ pageParam, queryKey }) => API.fetchTouristSpot(pageParam, city, query),
        {
            // give react-query the next page, so it know how to fetch the next page.
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.length < API_POST_LIMIT) return undefined;
                const newPage = pages.length - 1 as number;
                return newPage + 1;
            },
        });
    return {
        data,
        isLoading,
        isFetching,
        fetchNextPage,
        hasNextPage,
        error,
        refetch,
    }
}

export default useFetchInfinitePost;