import { useState, useRef } from 'react';
import { S } from './styled';
import { useOnClickOutside } from '../../utils/hook';

interface SelectProps {
    options: string[],
    onChange?: () => void
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setIsOpen(false));

    const handleClick = () => {
        onChange && onChange();
        setIsOpen(!isOpen);
    }

    const handleSelect = (location: string | null) => {
        onChange && onChange();
        setSelectedOption(location);
        setIsOpen(false);
    }
    

    return (
        <S.Wrapper ref={ref}>
            <S.Select onClick={handleClick}>
                {selectedOption || 'Taiwan'}
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