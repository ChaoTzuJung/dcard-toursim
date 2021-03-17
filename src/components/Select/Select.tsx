import { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useOnClickOutside } from 'hook/useOnClickOutside';
import { getKeyByValue } from 'utils/helper';
import { S } from './styled';

type SelectProps = {
    options: string[];
    onChange?: () => void;
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
    const history = useHistory();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('請選擇縣市');
    const ref = useRef<HTMLDivElement>(null);

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
    
    useOnClickOutside(ref, () => setIsOpen(false));

    useEffect(() => {
        setSelectedOption('請選擇縣市') 
    }, [location.pathname === '/'])

    return (
        <S.Wrapper ref={ref}>
            <S.Select onClick={handleClick}>
                {selectedOption}
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
                                key={location}
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