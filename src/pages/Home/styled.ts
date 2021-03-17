import styled from 'styled-components';
import { device } from 'utils/media';

export const S = {
    Wrapper: styled.div`
        max-width: 1206px;
        margin: 0 auto;
        display: flex;

        @media ${device.mobile} {
            flex-direction: column;
        }

        & .sidebar {
            margin-right: 42px;

            @media ${device.mobile} {
                position: sticky;
                top: 0;
                z-index: 100;
                margin-right: 0;
                margin-top: 46px;
            }
        }

        & .list-container {
            width: 780px;
            min-height: calc(100vh - 92px);
            height: 100%;

            @media ${device.tablet} {
                width: 388px;
            }

            @media ${device.mobile} {
                width: 100%;
                padding: 25px 40px;
            }
        }
    `,

}