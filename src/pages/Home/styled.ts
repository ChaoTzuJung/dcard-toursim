import styled from 'styled-components';

export const S = {
    Wrapper: styled.div`
        max-width: var(--maxWidth);
        margin: 0 auto;
        display: flex;

        & .sidebar {
            margin-right: 42px;
        }

        & .list-container {
            width: 780px;
            min-height: calc(100vh - 92px);
            height: 100%;
        }
    `,

}