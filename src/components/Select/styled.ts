import styled, { css } from 'styled-components';

type TriangleType = {
    direction?: string;
};

export const S = {
    Wrapper: styled.div`
        position: relative;
        width: 220px;
        border-radius: 2px;
    `,
    Select: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        color: var(--black);
        font-family: 'Roboto-Regular';
        font-size: 16px;
        background: var(--white);
        border-radius: 2px;
        padding: 0 8px;
        cursor: pointer;
    `,
    SelectContainer:  styled.div`
        position: absolute;
        top: 48px;
        width: 220px;
        margin: 0 auto;
        border-radius: 2px;
        z-index: 2;
    `,
    SelectList: styled.ul`
        width: 100%;
        margin: 0;
        padding: 0;
        color: var(--black);
    `,
    Option: styled.li`
        width: 100%;
        height: 40px;
        list-style: none;
        color: var(--black);
        background: var(--white);
        font-family: 'Roboto-Regular';
        font-size: 16px;
        padding: 0 8px;
        cursor: pointer;
        &:first-child {
            border-radius: 2px 2px 0 0;
        }

        &:last-child {
            border-radius: 0 0 2px 2px;
        }

        &:hover {
            background: var(--lightGrey);
        }
    `,
    Triangle: styled.div<TriangleType>`
        margin: 3px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 4px 6px 4px;
        border-color: transparent transparent #000000 transparent;
        ${(props: TriangleType) => props.direction === 'down' && css`
            transform: rotate(180deg);
        `}
    `
}