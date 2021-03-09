import styled, { css } from 'styled-components';

type DayType = {
    isSelect?: boolean;
    isOutOfLimit?: boolean;
};

export const S = {
    Calendar: styled.div`
        position: relative;
        width: 335px;
        height: 335px;
        min-width: 335px;
        padding: 16px;
        border-radius: 4px;
        background-color: var(--white);
    `,
    calendarHeader: styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
    `,
    calendarBody: styled.div`
    `,
    weekDay: styled.div`
        display: flex;

        & div {
            flex: 1 1 0%;
            line-height: 1.57;
            text-align: center;
            opacity: 0.6;
            font-size: 14px;
            font-weight: 500;
            color: var(--black);
            margin: 7.5px 0;
        }
    `,
    Day: styled.div`
        display: inline-block;
        float: left;
        width: calc(100% / 7);
        line-height: 37px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        outline: none;

        &:hover {
            border-radius: 50%;
            background: var(--grey);
        }

        ${(props: DayType) => props.isSelect && css`
            position: relative;
            color: var(--white);

            &::after {
                content: attr(data-today);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 24px;
                height: 24px;
                background-color: var(--red);
                border-radius: 50%;
                color: inherit;
                text-align: center;
                line-height: 24px;
            }
        `}
        ${(props: DayType) => props.isOutOfLimit && css`
            color: var(--darkGrey);
			opacity: 0.3;
        `}
    `
}