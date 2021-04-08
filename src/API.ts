import jsSHA from "jssha";

import {
    API_KEY,
    API_ID,
    TOURISM_BASE_URL,
    API_POST_LIMIT,
} from './config';

const GetAuthorizationHeader = (xDate: string) => {
    const AppID = (API_ID as string);
    const AppKey = (API_KEY as string);
    const GMTString = xDate || new Date().toUTCString();
    const ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    const HMAC = ShaObj.getHMAC('B64');
     /* eslint-disable no-useless-escape */
    const Authorization = `hmac username=\"${AppID}\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"${HMAC}\"`;
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

const apiSettings = {
    fetchTouristSpot: async (
        page: number = 0,
        city: string = "",
        query: string | undefined = undefined,
        date: string, 
    ) => {
        const endpoint = query ?
            `${TOURISM_BASE_URL}/ScenicSpot/${city}?$filter=contains(Name,'${query}')&$format=JSON` :
            `${TOURISM_BASE_URL}/ScenicSpot/${city}?$top=${API_POST_LIMIT}&$skip=${page * API_POST_LIMIT}&$format=JSON`;
        const response = await(
            await fetch(endpoint, {
                method: 'GET',
                headers: GetAuthorizationHeader(date),
            })
        ).json()
        return response;
    }
};

export default apiSettings;
