import React from 'react';

import { ICheckbox } from '../../types';
import { mapSelectOption } from '../../utils/helper';
import Select from '../Select';
import DatePicker from '../DatePicker';
import Checkbox from '../Checkbox';
import { S } from './styled';

type  FilterProps = {
    checkbox: ICheckbox;
    onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filter: React.FC<FilterProps> = ({ onCheckboxChange, checkbox }) => {

    return (
        <S.Filter>
            <S.Title>Location</S.Title>
            <Select options={mapSelectOption()} />
            <S.Title>Date</S.Title>
            <DatePicker className="position" label="from"/>
            <DatePicker className="transformLabel" label="to"/>
            <S.Title>Categories</S.Title>
            <Checkbox
                onCheckboxChange={onCheckboxChange}
                checkbox={checkbox}
            />
        </S.Filter>
    )
};

export default Filter;