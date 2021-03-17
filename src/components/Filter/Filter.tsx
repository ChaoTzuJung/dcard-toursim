import { useState } from 'react';
import useMedia from 'use-media';

import { ICheckbox } from 'types';
import { screen } from 'utils/media';
import { mapSelectOption } from 'utils/helper';
import Checkbox from 'components/Checkbox';
import DatePicker from 'components/DatePicker';
import Select from 'components/Select';
import { S } from './styled';

type FilterProps = {
    checkbox: ICheckbox;
    onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filter: React.FC<FilterProps> = ({ checkbox, onCheckboxChange }) => {
    const isMobile = useMedia({ maxWidth: screen.mobile })
    const [open, setOpen] = useState<string>('Location');

    const handleClick = (label: string) => {
        setOpen(label);
    }

    const FilterMobile = () => (
        <S.Filter>
            <div className="col" onClick={() => handleClick('Location')}>
                <div className="expand-more-icon" />
                <S.Title>Location</S.Title>
                {open === 'Location' && (
                    <div className="field">
                        <Select options={mapSelectOption()} />
                    </div>
                )}
            </div>
            <div className="col" onClick={() => handleClick('Date')}>
                <div className="expand-more-icon" />
                <S.Title>Date</S.Title>
                {open === 'Date' && (
                    <div className="field">
                        <DatePicker className="position" label="from"/>
                        <DatePicker className="transformLabel" label="to"/>
                    </div>
                )}
            </div>
            <div className="col" onClick={() => handleClick('Categories')}>
                <div className="expand-more-icon" />
                <S.Title>Categories</S.Title>
                {open === 'Categories' && (
                    <div className="field">
                        <Checkbox
                            onCheckboxChange={onCheckboxChange}
                            checkbox={checkbox}
                        />
                    </div>
                )}
            </div>
        </S.Filter>
    );

    if(isMobile) return <FilterMobile />;

    return (
        <S.Filter>
            <S.Title>Location</S.Title>
            <Select options={mapSelectOption()} />
            <S.Title>Date</S.Title>
            <DatePicker className="position" label="from"/>
            <DatePicker className="transformLabel" label="to"/>
            <S.Title>Categories</S.Title>
            <Checkbox onCheckboxChange={onCheckboxChange} checkbox={checkbox} />
        </S.Filter>
    )
};

export default Filter;