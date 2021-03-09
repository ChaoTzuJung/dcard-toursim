import React from 'react';
import { S } from './styled';

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';

const Card: React.FC = () => {
    return (
        <S.Card>
            <img src="https://images.unsplash.com/photo-1569078201377-7a28757ecb13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
            <S.CardInfo>
                <S.CardTitle>Kogi Cosby sweater</S.CardTitle>
                <S.CardDescription>Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.</S.CardDescription>
                <div className="row">
                    <S.TicketInfo>than Foster</S.TicketInfo>
                    <S.Class>Entertainment</S.Class>
                </div>
                <div className="row">
                    <LocationOnOutlinedIcon className="icon" style={{ fontSize: 16 }} />
                    <S.Address>Kaohsiung City</S.Address>
                    <DateRangeIcon className="icon" style={{ fontSize: 16 }} />
                    <S.TimeInterval>2018/5/24 - 2018/5/31</S.TimeInterval>
                </div>
            </S.CardInfo>
        </S.Card>
    )
};

export default Card;