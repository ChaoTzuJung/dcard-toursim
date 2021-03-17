import { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';

import { useOnClickOutside } from 'hook/useOnClickOutside';
import { IDate } from 'types';
import Calendar from 'components/Calendar';
import { S } from './styled';

type DatePickerProps = {
    label: string;
    className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, className }) => {
    const now = dayjs().format('YYYY/MM/DD');
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(now);
    const [calendarValue, setCalendarValue] = useState<string>('');

    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setCalendarOpen(false));

    useEffect(() => {
		if (inputValue) {
			setCalendarValue(inputValue);
		}
	}, [inputValue]);

	const openCalendar = () => setCalendarOpen(true);
	const closeClendar = () => setCalendarOpen(false);

	const handleCalendarChange = (day: IDate) => {
		let newMonth;
		let newDate;

		if (day.month < 9) {
			newMonth = `0${day.month + 1}`;
		} else {
			newMonth = `${day.month + 1}`;
		}

		if (day.date < 10) {
			newDate = `0${day.date}`;
		} else {
			newDate = `${day.date}`;
		}
		const result = `${day.year}/${newMonth}/${newDate}`;
		setInputValue(result);
		closeClendar();
    };

    return (
        <S.Wrapper className={className} ref={ref}>
            <div className="row">
                <div className="label">{label}</div>
                <S.Input
                    type="text"
                    name={label}
                    value={inputValue}
                    onFocus={() => openCalendar()}
                    readOnly
                />
                {isCalendarOpen && (
                    <Calendar
                        className="position"
                        value={calendarValue}
                        onChange={handleCalendarChange}
                    />
                )}
            </div>
        </S.Wrapper>
    )
}

export default DatePicker;
