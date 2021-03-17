import styled from 'styled-components';
import { device } from 'utils/media';

export const S = {
    Filter: styled.div`
        width: 300px;
        background: #EBEBEB;
        padding: 0 40px;

        @media ${device.mobile} {
            padding: 0;
        }

        & .col {
            position: relative;
            border-bottom: 1px solid var(--darkGrey);
            padding: 0 40px;
            cursor: pointer;

            & .expand-more-icon {
                position: absolute;
                top: 21px;
                right: 25px;

                &::before {
                    content: '';
                    display: block;
                    width: 17px;
                    height: 2px;
                    background: var(--darkGrey);
                    transform: translate(-50%, 9px);
                }

                &::after {
                    content: '';
                    display: block;
                    width: 2px;
                    height: 17px;
                    background: var(--darkGrey);
                    transform: translate(-50%, 0);
                }
            }

            & .field {
                padding-bottom: 24px;
            }
        }

        & .close {
            padding-bottom: 0;
        }

        & .position {
            margin-bottom: 8px;
        }

        & .transformLabel {
            & .label {
                transform: translateX(100%);
            
                @media ${device.mobile} {
                    margin-right: 31px;
                }
            }
        }

        @media ${device.mobile} {
            width: 100vw;
        }
    `,
    Title: styled.div`
        font-family: 'Roboto-Bold';
        font-size: 20px;
        color: var(--black);
        padding: 24px 0;

        @media ${device.mobile} {
            padding: 12px 0;
        }
    `
}