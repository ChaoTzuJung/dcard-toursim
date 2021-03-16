import { ICheckbox } from '../../types';
import { S } from './styled';

type CheckboxProps = {
    checkbox: ICheckbox;
    onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ checkbox, onCheckboxChange }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onCheckboxChange && onCheckboxChange(event)
    }

    return (
        <S.Wrapper>
            {Object.keys(checkbox).map(item => (
                <S.Item key={item}>
                    <S.CheckboxButton
                        type="checkbox"
                        name={item}
                        value={item}
                        checked={checkbox[item]}
                        onChange={handleChange}
                    />
                    <S.CheckboxButtonLabel className="checkbox" />
                    <label>{item}</label>
                </S.Item>
            ))}
        </S.Wrapper>
    )
}

export default Checkbox;