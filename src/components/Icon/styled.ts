import styled, { css } from 'styled-components';

type RotateType = {
    rotate?: number;
};

export const S = {
    Icon: styled.div`
        display: flex;
        cursor: pointer;
        outline: none;
        ${(props: RotateType) => css`
            transform: rotate(${props.rotate}deg);
        `}
    `
}