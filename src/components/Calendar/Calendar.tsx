import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import toObject from 'dayjs/plugin/toObject';

import { IDate, IDayjsObject } from '../../types';
import Icon from '../Icon';
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
	
	// 可以知道每個月左上角第一格的年/月/日/星期
	const [firstDay, setFirstDay] = useState<IDate>({ year: 0, month: 0, date: 0, day: 0 });
	// 可以填入日期限制哪個日期以前的天數不能被選
	const [limitDay, setLimitDay] = useState<IDate>({ year: 0, month: 0, date: 0, day: 0 });
	// 負責產生每格日期的資料
	const [days, setDays] = useState<IDate[]>([]);
	// 紀錄被點擊的日期
	const [isSelectedDate, setIsSelectedDate] = useState<IDate>(today);
	// 紀錄切換月份時的月
	const [calendar, setCalendar] = useState<IDate>(isSelectedDate);

	// 每次開關calendar時會mount一次，直接檢查是否有值在input並帶入calendar，若 input 上有值則帶入
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
	}, []);

	// 控制之前或是未來的日期的顏色與可否點選
	const isOutOfLimit = (day: IDate) => {
		// 今天的日期
		const daytoday = new Date(today.year, today.month, today.date);
		// dateline的日期
		const samllestDay = new Date(limitDay.year, limitDay.month, limitDay.date);
		// 日曆上的日期
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

	// 取得最小能顯示的日期Range
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

	// 取得當月月曆的左上角第一格(週日)的數字(日期)
	const getFirstDayOfMonth = () => {
		// 取得月曆當月1號
		const MonthFirstDay = new Date(calendar.year, calendar.month, 1);

		// ＊當月1號 - 星期幾的數字 = 月曆的第一天(左上角第一格) TODO: 不理解邏輯
		const date = new Date(calendar.year, calendar.month, 1 - MonthFirstDay.getDay());

		setFirstDay(prevState => ({
			...prevState,
			year: date.getFullYear(),
			month: date.getMonth(),
			date: date.getDate(),
			day: date.getDay(),
		}));
	};

	// 照順序產生日期與資料
	const generateCalendarGrid = () => {
		const data: IDate[] = [];
		let day;
		for (let i = 0; i < 42; i += 1) {
			// JS Date 處理時間時，date 加 i 到超過 31時，會自動變成下個月
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

	// calendar state 有變，就自動執行 getFirstDayOfMonth，重新偵測修改 calendar 第一天資料
	useEffect(() => {
		getFirstDayOfMonth();
	}, [calendar]);

	// 第一次渲染
	useEffect(() => {
		getLimitDay();
	}, []);

	useEffect(() => {
		generateCalendarGrid();
	}, [firstDay]);

	// 前後加減調整年份
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

	// 前後加減調整月份
	const adjustMonth = (fix: number) => {
		// this.calendar.month += fix 範圍
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

	// 把數字 format 成英文日期
	const transferDate = (date: IDate) => {
		const { year, month } = date;
		// JS 在 date月份是 0 ~ 11
		const monthPlus = month + 1;
		return dayjs(`${year}-${monthPlus}-01`).format('MMM YYYY');
	};

	return (
		<S.Calendar className={className}>
			<S.calendarHeader>
				<Icon name="arrow_left" onClick={() => adjustMonth(-1)} />
				<div>{transferDate(calendar)}</div>
				<Icon name="arrow_right" onClick={() => adjustMonth(1)} rotate={180}/>
			</S.calendarHeader>
			<S.calendarBody>
				<S.weekDay>
					<div>Sun</div>
					<div>Mon</div>
					<div>Tue</div>
					<div>Wed</div>
					<div>Thr</div>
					<div>Fri</div>
					<div>Sat</div>
				</S.weekDay>
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
			</S.calendarBody>
		</S.Calendar>
	);
};

export default Calendar;
