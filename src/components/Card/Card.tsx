import React from 'react';
import dayjs from 'dayjs';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Skeleton from "@material-ui/lab/Skeleton";

import { S } from './styled';

type CardProps = {
    name: string;
    description?: string;
    address?: string;
    updateTime?: string;
    category?: string;
    ticketInfo?: string;
    picture?: string;
    loading?: boolean;
}

const Card: React.FC<CardProps> = ({
    name,
    description,
    address,
    updateTime,
    category,
    ticketInfo,
    picture,
    loading = false,
}) => {
    const cityName = address?.slice(0, 3);
    const fee = ticketInfo?.includes('免費') ? 'Free': 'Paid';

    if(loading)
        return (
            <S.Card>
                <Skeleton animation="wave" variant="rect" width={220} height={220} />
                <S.CardInfo>
                    <Skeleton animation="wave" height={24} width="30%" />
                    <Skeleton animation="wave" height={24} width={520} />
                    <Skeleton animation="wave" height={24} width={520} />
                    <Skeleton animation="wave" height={24} width={520} />
                    <div className="row">
                        <Skeleton animation="wave" height={24} width="16%" />
                    </div>
                    <div className="row">
                        <LocationOnOutlinedIcon className="icon" style={{ fontSize: 16 }} />
                        <Skeleton animation="wave" height={24} width="10%" />
                        <DateRangeIcon className="icon" style={{ fontSize: 16, marginLeft: 20 }} />
                        <Skeleton animation="wave" height={24} width="24%" />
                    </div>
                </S.CardInfo>
            </S.Card>
        )

    return (
        <S.Card>
            <img src={picture} />
            <S.CardInfo>
                <S.CardTitle>{name}</S.CardTitle>
                <S.CardDescription>{description}</S.CardDescription>
                <div className="row">
                    <S.TicketInfo>{fee}</S.TicketInfo>
                    {category && <S.Level>{category}</S.Level>}
                </div>
                <div className="row">
                    <LocationOnOutlinedIcon className="icon" style={{ fontSize: 16 }} />
                    <S.Address>{cityName}</S.Address>
                    <DateRangeIcon className="icon" style={{ fontSize: 16 }} />
                    <S.TimeInterval>{dayjs(updateTime).format('YYYY/MM/DD')}</S.TimeInterval>
                </div>
            </S.CardInfo>
        </S.Card>
    )
};

export default Card;