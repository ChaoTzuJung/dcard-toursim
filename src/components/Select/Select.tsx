import { useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useOnClickOutside } from '../../utils/hook';
import { getKeyByValue, getValueByKey } from '../../utils/helper';
import { S } from './styled';

type SelectProps = {
    options: string[];
    onChange?: () => void;
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
    const history = useHistory();
    const location = useLocation();
    const defaultLocation: string | undefined = location.pathname.split('/')[2];
    let defaultCity = '請選擇縣市';

    if(defaultLocation !== undefined) {
        defaultCity = getValueByKey(defaultLocation)[0][1]
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setIsOpen(false));

    const handleClick = () => {
        onChange && onChange();
        setIsOpen(!isOpen);
    }

    const handleSelect = (location: string) => {
        onChange && onChange();
        setSelectedOption(location);
        setIsOpen(false);
        const city = getKeyByValue(location)[0][0];

        history.push(`/scenicSpot/${city}`);
    }
    

    return (
        <S.Wrapper ref={ref}>
            <S.Select onClick={handleClick}>
                {selectedOption || defaultCity}
                <div>
                    <S.Triangle />
                    <S.Triangle direction="down" />
                </div>
            </S.Select>
            {isOpen && (
                <S.SelectContainer>
                    <S.SelectList>
                        {options.map(location => (
                            <S.Option
                                onClick={() => handleSelect(location)}
                                key={Math.random()}
                            >
                                {location}
                            </S.Option>
                        ))}
                    </S.SelectList>
                </S.SelectContainer>
            )}
        </S.Wrapper>
    )
}

export default Select;