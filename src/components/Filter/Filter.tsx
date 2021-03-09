import React, { useState } from 'react';
import Select from '../Select';
import DatePicker from '../DatePicker';
import Checkbox from '../Checkbox';
import { S } from './styled';

const Filter: React.FC = () => {
    const [state, setState] = useState({
        checkedA: false,
        checkedE: false,
        checkedF: false,
        checkedL: false,
        checkedO: false,
    });

    const [town, setTown] = React.useState('');

    const [value, setValue] = useState(new Date());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleTownChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTown(event.target.value as string);
    };

    const handleCalendarChange = (date: Date | Date[]): void => {
        alert(`New date is: ${value}`);
    }

    const categories = {
        checkedA: 'All',
        checkedE: 'Entertainment',
        checkedF: 'Food',
        checkedL: 'Learning',
        checkedO: 'Outdoors'
    };

    return (
        <S.Filter>
            <S.Title>Location</S.Title>
            <Select options={['Taipei', 'Hsinchu', 'Tainan']} />
            <S.Title>Date</S.Title>
            <DatePicker className="position" label="from"/>
            <DatePicker className="transformLabel" label="to"/>
            <S.Title>Categories</S.Title>
            <Checkbox />
        </S.Filter>
    )
};

export default Filter;