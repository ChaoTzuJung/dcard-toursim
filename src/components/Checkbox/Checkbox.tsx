import { useState } from 'react';
import { S } from './styled';

interface ICheckbox {
    [name: string]: boolean
}

const Checkbox: React.FC = () => {
    const [checkbox, setCheckbox] = useState<ICheckbox>({
        All: false,
        Entertainment: false,
        Food: false,
        Learning: false,
        Outdoors: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
    }

    return (
        <S.Wapper>
            <S.Item>
                <S.CheckboxButton
                    type="checkbox"
                    name="All"
                    value="All"
                    checked={checkbox.All}
                    onChange={handleChange}
                />
                <S.CheckboxButtonLabel className="checkbox" />
                <label>All</label>
            </S.Item>
            <S.Item>
                <S.CheckboxButton
                    type="checkbox"
                    name="Entertainment"
                    value="Entertainment"
                    checked={checkbox.Entertainment}
                    onChange={handleChange}
                />
                <S.CheckboxButtonLabel className="checkbox" />
                <label>Entertainment</label>
            </S.Item>
            <S.Item>
                <S.CheckboxButton
                    type="checkbox"
                    name="Food"
                    value="Food"
                    checked={checkbox.Food}
                    onChange={handleChange}
                />
                <S.CheckboxButtonLabel className="checkbox" />
                <label>Food</label>
            </S.Item>
            <S.Item>
                <S.CheckboxButton
                    type="checkbox"
                    name="Learning"
                    value="Learning"
                    checked={checkbox.Learning}
                    onChange={handleChange}
                />
                <S.CheckboxButtonLabel className="checkbox" />
                <label>Learning</label>
            </S.Item>
            <S.Item>
                <S.CheckboxButton
                    type="checkbox"
                    name="Outdoors"
                    value="Outdoors"
                    checked={checkbox.Outdoors}
                    onChange={handleChange}
                />
                <S.CheckboxButtonLabel className="checkbox" />
                <label>Outdoors</label>
            </S.Item>
        </S.Wapper>
    )
}

export default Checkbox;