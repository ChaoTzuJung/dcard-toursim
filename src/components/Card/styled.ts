import styled from 'styled-components';

export const S = {
    Card: styled.div`
        display: flex;
        width: 780px;
        height: 220px;
        background: var(--white);
        margin-bottom: 24px;
        box-shadow: 2px 5px 10px 0 #EBEBEB;
        cursor: pointer;

        & img {
            width: 220px;
            height: 220px;
            object-fit: cover;
        }

        & img:not([src]) {
            background-image: url('https://fakeimg.pl/220x220')
        }

        &:hover {
            box-shadow: 2px 5px 10px 0 #DBDBDB;
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
        width: 520px;
        font-family: 'Roboto-Regular';
        font-size: 16px;
        color: var(--black);
        line-height: 24px;
        margin-top: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    `,
    TicketInfo: styled.div`
        font-family: 'Roboto-Bold';
        font-size: 16px;
        color: var(--black);
    `,
    Level: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        font-family: 'Roboto-Italic';
        font-size: 16px;
        color: var(--white);
        background: var(--grey);
        border-radius: 100px;
        width: 131px;
        height: 24px;
    `,
    Address: styled.div`
        font-family: Roboto-Regular;
        font-size: 16px;
        color: var(--darkGrey);
        margin-right: 20px;
    `,
    TimeInterval: styled.div`
        font-family: Roboto-Regular;
        font-size: 16px;
        color: var(--darkGrey);
    `,
}
