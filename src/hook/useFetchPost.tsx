import { useState, useEffect } from 'react';
import jsSHA from "jssha";

import { MOTC_BASE_URL, API_POST_LIMIT } from '../api';
import { IToursim } from '../types';

const GetAuthorizationHeader = () => {
    const AppID = 'b274fdb6b6994eaca433d5a82aa1d620';
    const AppKey = 'bs3Z-VOZAgDVxYqAHz7q69WCSlg';

    const GMTString = new Date().toUTCString();
    const ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    const HMAC = ShaObj.getHMAC('B64');
    const Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

export const fetchTourismList = async (): Promise<IToursim[]> =>
    await(await fetch(`${MOTC_BASE_URL}?$top=${API_POST_LIMIT}&$format=JSON`, { method: 'GET', headers: GetAuthorizationHeader() })).json();

export const fetchTourismListByCity = async (city: string): Promise<IToursim[]> =>
    await(await fetch(`${MOTC_BASE_URL}/${city}?$top=${API_POST_LIMIT}&$format=JSON`, { method: 'GET', headers: GetAuthorizationHeader() })).json();

export const fetchMoreTourismList = async (lastId: string): Promise<IToursim[]> =>
    await(await fetch(`${MOTC_BASE_URL}?$top=${API_POST_LIMIT}&$skip=${lastId}&$format=JSON`, { method: 'GET', headers: GetAuthorizationHeader() })).json();

export const fetchMoreTourismListByCity = async (city: string, lastId?: string | null): Promise<IToursim[]> =>
    await(await fetch(`${MOTC_BASE_URL}/${city}?$top=${API_POST_LIMIT}&$skip=${lastId}&$format=JSON`, { method: 'GET', headers: GetAuthorizationHeader() })).json();

export default function useFetchPost(city?: string | undefined, lastId?: string | null) {
    console.log('city: ', city);
    console.log('lastId: ', lastId);

    const [posts, setPosts] = useState<IToursim[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        if(city && lastId) {
            (async () => {
                try {
                    const data = await fetchMoreTourismListByCity(city, lastId);
                    setPosts((prevPosts) => [...prevPosts, ...data]);
                    setHasMore(data.length > 0);
                    setLoading(false);
                } catch {
                    setError(true);
                }
            })();
        } else if(city) {
            (async () => {
                try {
                    const data = await fetchTourismListByCity(city);
                    setPosts(data);
                    setHasMore(data.length > 0);
                    setLoading(false);
                } catch {
                    setError(true);
                }
            })();
        } else if(lastId) {
            (async () => {
                try {
                    const data = await fetchMoreTourismList(lastId);
                    setPosts((prevPosts) => [...prevPosts, ...data]);
                    setHasMore(data.length > 0);
                    setLoading(false);
                } catch {
                    setError(true);
                }
            })();
        } else {
            (async () => {
                try {
                    const data = await fetchTourismList();
                    setPosts(data);
                    setHasMore(data.length > 0);
                    setLoading(false);
                } catch {
                    setError(true);
                }
            })();
        }
    }, [city, lastId])

    useEffect(() => {

    }, [])
    return { posts, loading, error, hasMore }
};
