import { ICity } from 'types';

export const CITY_MAP: ICity = {
    Taipei: '臺北市',
    NewTaipei: '新北市',
    Taoyuan: '桃園市',
    Taichung: '臺中市',
    Tainan: '臺南市',
    Kaohsiung: '高雄市',
    Keelung: '基隆市',
    Hsinchu: '新竹市',
    HsinchuCounty: '新竹縣',
    MiaoliCounty: '苗栗縣',
    ChanghuaCounty: '彰化縣',
    NantouCounty: '南投縣',
    YunlinCounty: '雲林縣',
    ChiayiCounty: '嘉義縣',
    Chiayi: '嘉義市',
    PingtungCounty: '屏東縣',
    YilanCounty: '宜蘭縣',
    HualienCounty: '花蓮縣',
    TaitungCounty: '臺東縣',
    KinmenCounty: '金門縣',
    PenghuCounty: '澎湖縣',
    LienchiangCounty: '連江縣',
}

export const mapSelectOption = () => Object.keys(CITY_MAP).map((key: string) => CITY_MAP[key]);

export const getKeyByValue = (location: string) => Object.entries(CITY_MAP).filter(([key, value]: [string, string]) => location === value);

export const getValueByKey = (location: string) => Object.entries(CITY_MAP).filter(([key, value]: [string, string]) => location === key);
