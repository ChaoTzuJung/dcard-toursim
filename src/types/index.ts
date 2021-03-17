export interface IIntersectionObserverEntry {
    boundingClientRect: DOMRectReadOnly,
    intersectionRatio: number,
    intersectionRect: DOMRectReadOnly,
    isIntersecting: boolean,
    rootBounds: DOMRectReadOnly | null,
    target: Element,
    time: number
};

export interface IToursim {
    ID: string,
    Name: string,
    DescriptionDetail?: string,
    Description?: string,
    Phone?: string,
    Address?: string,
    ZipCode?: string,
    TravelInfo?: string,
    OpenTime?: string,
    Picture: {
        PictureUrl1?: string,
        PictureDescription1?: string,
    },
    Position: {
        PositionLat: number,
        PositionLon: number,
        GeoHash: string,
    },
    Class1?: string,
    ParkingPosition?: {},
    TicketInfo?: string,
    Remarks?: string,
    SrcUpdateTime: string,
    UpdateTime: string,
    message?: {},
}

export interface IFetchPostHook {
    loading: boolean;
    error: boolean;
    posts: any[];
    hasMore: boolean;
}

export interface IDate {
	year: number,
	month: number,
	date: number,
	day: number,
}

export interface IDayjsObject {
	years: number,
	months: number,
	date: number,
	hours: number,
	minutes: number,
	seconds: number,
	milliseconds: number,
}

export interface ISvgMap {
    [name: string]: JSX.Element
}

export interface ICheckbox {
    [name: string]: boolean
}

export interface ICity {
    [name: string]: string
}
