// Configuration for MOTC API
// Read more about the API here: https://ptx.transportdata.tw/MOTC

const API_URL = 'https://ptx.transportdata.tw/MOTC/v2/';
const API_KEY = process.env.REACT_APP_APP_KEY;
const API_ID = process.env.REACT_APP_APP_ID;

const TOURISM_BASE_URL =  `${API_URL}Tourism`;
const API_POST_LIMIT = 30;

export {
    API_URL,
    API_KEY,
    API_ID,
    TOURISM_BASE_URL,
    API_POST_LIMIT,
};
