import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import toObject from 'dayjs/plugin/toObject';

import { IDate, IDayjsObject } from 'types';
import Icon from 'components/Icon';
import { S } from './styled';

type CalendarProps = {
	className?: string;
    value: string;
	calendarPastDays?: number;
	onChange: (day: IDate) => void;
}

const Calendar: React.FC<CalendarProps> = ({ className, value, calendarPastDays, onChange }) => {
	const now = new Date();
	const today = {
		year: now.getFullYear(),
		month: now.getMonth(),
		date: now.getDate(),
		day: now.getDay(),
	};
	const pastDays = calendarPastDays || 0;
	const [firstDay, setFirstDay] = useState<IDate>({ year: 0, month: 0, date: 0, day: 0 });
	const [limitDay, setLimitDay] = useState<IDate>({ year: 0, month: 0, date: 0, day: 0 });
	const [days, setDays] = useState<IDate[]>([]);
	const [isSelectedDate, setIsSelectedDate] = useState<IDate>(today);
	const [calendar, setCalendar] = useState<IDate>(isSelectedDate);

	const isOutOfLimit = (day: IDate) => {
		const daytoday = new Date(today.year, today.month, today.date);
		const samllestDay = new Date(limitDay.year, limitDay.month, limitDay.date);
		const dayCal = new Date(day.year, day.month, day.date);
		return dayCal > daytoday || dayCal < samllestDay;
	};

	const pickDate = (day: IDate) => {
		if (isOutOfLimit(day)) {
			return false;
		}
		setIsSelectedDate({ year: day.year, month: day.month, date: day.date, day: day.day });
		onChange({ year: day.year, month: day.month, date: day.date, day: day.day });
		return isSelectedDate;
	};

	const isSelect = (day: IDate) => {
		if (isSelectedDate.date !== now.getDate()) {
			return (
				day.year === isSelectedDate.year &&
				day.month === isSelectedDate.month &&
				day.date === isSelectedDate.date
			);
		}
		return day.year === today.year && day.month === today.month && day.date === today.date;
	};

	const getLimitDay = () => {
		if(!pastDays) {
			return
		}
		const samllestDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() - pastDays);
		setLimitDay({
			year: samllestDay.getFullYear(),
			month: samllestDay.getMonth(),
			date: samllestDay.getDate(),
			day: samllestDay.getDay(),
		});
	};

	const getFirstDayOfMonth = () => {
		const MonthFirstDay = new Date(calendar.year, calendar.month, 1);
		const date = new Date(calendar.year, calendar.month, 1 - MonthFirstDay.getDay());

		setFirstDay(prevState => ({
			...prevState,
			year: date.getFullYear(),
			month: date.getMonth(),
			date: date.getDate(),
			day: date.getDay(),
		}));
	};

	const generateCalendarGrid = () => {
		const data: IDate[] = [];
		let day;
		for (let i = 0; i < 42; i += 1) {
			day = new Date(firstDay.year, firstDay.month, firstDay.date + i);

			data.push({
				year: day.getFullYear(),
				month: day.getMonth(),
				date: day.getDate(),
				day: day.getDay(),
			});
		}

		setDays([...data]);
	};

	const adjustYear = (fix: number) => {
		if (fix > 0) {
			setCalendar(prevState => ({
				...prevState,
				year: calendar.year + fix,
				month: 0,
			}));
		} else {
			setCalendar(prevState => ({
				...prevState,
				year: calendar.year + fix,
				month: 11,
			}));
		}
	};

	const adjustMonth = (fix: number) => {
		const month = calendar.month + fix;
		if (month > 11) {
			adjustYear(1);
		} else if (month < 0) {
			adjustYear(-1);
		} else {
			setCalendar({
				...calendar,
				month,
			});
		}
	};

	const transferDate = (date: IDate) => {
		const { year, month } = date;
		const monthPlus = month + 1;
		return dayjs(`${year}-${monthPlus}-01`).format('MMM YYYY');
	};

	useEffect(() => {
		if (value) {
			dayjs.extend(toObject);
			const myDate: IDayjsObject = dayjs(value).toObject();

			setCalendar(prevState => ({
				...prevState,
				year: myDate.years,
				month: myDate.months,
				date: myDate.date,
			}));

			setIsSelectedDate(prevState => ({
				...prevState,
				year: myDate.years,
				month: myDate.months,
				date: myDate.date,
			}));
		}
	}, [value]);

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		getFirstDayOfMonth();
	}, [calendar]);

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		getLimitDay();
	}, []);

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		generateCalendarGrid();
	}, [firstDay]);

	return (
		<S.Calendar className={className}>
			<S.CalendarHeader>
				<Icon name="arrow_left" onClick={() => adjustMonth(-1)} />
				<div>{transferDate(calendar)}</div>
				<Icon name="arrow_right" onClick={() => adjustMonth(1)} rotate={180}/>
			</S.CalendarHeader>
			<S.CalendarBody>
				<S.WeekDay>
					<div>Sun</div>
					<div>Mon</div>
					<div>Tue</div>
					<div>Wed</div>
					<div>Thr</div>
					<div>Fri</div>
					<div>Sat</div>
				</S.WeekDay>
				{days.map((day: IDate) => (
					<S.Day
						key={`${day.year}-${day.month}-${day.date}`}
						data-today={isSelectedDate.date}
						role="button"
						tabIndex={0}
						isSelect={isSelect(day)}
						isOutOfLimit={isOutOfLimit(day)}
						onClick={() => pickDate(day)}
						onKeyDown={() => pickDate(day)}
					>
						{day.date}
					</S.Day>
				))}
			</S.CalendarBody>
		</S.Calendar>
	);
};

export default Calendar;
