import styled from 'styled-components';
import { device } from 'utils/media';

export const S = {
    Header: styled.header`
        width: 100%;
        height: 92px;
        background: var(--purple);
        padding: 24px 40px;

        @media ${device.mobile} {
            height: 69px;
        }
    `,
    Navigation: styled.nav`
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        max-width: 1206px;;
        margin: auto;

		@media ${device.tablet} {
			max-width: 689px;
		}

        @media ${device.mobile} {
            max-width: 100%;
            flex-direction: column;
        }

        & .bar {
            margin-right: 144px;

            @media ${device.mobile} {
                max-width: 100%;
                flex-direction: column;
                margin-right: 0;
                transform: translateY(-50%);
            }

            & a {
                display: flex;
            }
        }

        & .sub-bar {
            & .search-bar {
                display: flex;
                align-items: center;
                width: 388px;
                border-bottom: 1px solid var(--white);

                @media ${device.mobile} {
                    align-items: center;
                    justify-content: center;
                    width: 100vw;
                    padding: 9px 0 10px 10px;
                    border-bottom: 1px solid var(--black);
                }
            }

            @media ${device.mobile} {
                align-items: center;
                justify-content: center;
                width: 100vw;
                background: var(--lightGrey);
                box-shadow: 0 5px 10px #D7D7D7;
            }
        }
    `,
    Logo: styled.img`
        display: inline-block;
        font-size: 36px;
        padding-left: 40px;

		@media ${device.tablet} {
			padding-left: 0;
		}

        @media ${device.mobile} {
            font-size: 24px;
            line-height: 1;
        }
    `,
    Input: styled.input`
        width: 100%;
        padding: 5px 20px;
        border: none;
        background: transparent;
        outline: none;
        border-radius: 0;
        color: var(--white);
        font-size: 20px;
        font-family: 'Roboto-Italic';

        @media ${device.mobile} {
            color: var(--black);
        }

        &::placeholder {
            color: rgba(255,255,255,0.50);

            @media ${device.mobile} {
                color: var(--darkGrey);
            }
        }
    `
}
