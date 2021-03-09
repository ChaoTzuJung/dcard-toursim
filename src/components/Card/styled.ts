import styled from 'styled-components';

export const S = {
    Card: styled.div`
        display: flex;
        width: 780px;
        height: 220px;
        background: var(--white);

        & img {
            width: 220px;
            height: 220px;
            object-fit: cover;
        }
    `,
    CardInfo: styled.div`
        padding: 24px 20px;

        & .row {
            display: flex;
            align-items: center;
            margin-top: 12px;

            & > .icon {
                margin-right: 7px;
            }
        }
    `,
    CardTitle: styled.div`
        font-family: 'Roboto-Bold';
        font-size: 24px;
        color:  var(--lightPurple);
        line-height: 36px;
    `,
    CardDescription: styled.div`
        font-family: 'Roboto-Regular';
        font-size: 16px;
        color: #000000;
        line-height: 24px;
        margin-top: 16px;
    `,
    TicketInfo: styled.div`
        font-family: 'Roboto-Bold';
        font-size: 16px;
        color: #000000;
    `,
    Class: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        font-family: 'Roboto-Italic';
        font-size: 16px;
        color: #FFFFFF;
        background: #D7D7D7;
        border-radius: 100px;
        width: 131px;
        height: 24px;
    `,
    Address: styled.div`
        font-family: Roboto-Regular;
        font-size: 16px;
        color: #9B9B9B;
        margin-right: 20px;
    `,
    TimeInterval: styled.div`
        font-family: Roboto-Regular;
        font-size: 16px;
        color: #9B9B9B;
    `,
}
