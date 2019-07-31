import styled from 'styled-components';

export const Container = styled.div`
    height: 70px;
    background: #fff;

    display: grid;
    grid-template-columns: 80% auto auto auto 1fr;
    grid-column-gap: 15px;
    align-items: center;

    h1 {
        font-size: .8rem;
        font-weight: 400;
        color: rgb(99, 99, 108);

        span {
            margin-left: 15px;
            font-size: .8rem;
            color: rgb(245, 100, 27);
            font-weight: 700;
            cursor: pointer;
        }
    }
`;

export const NotificationContainer = styled.div`
    color: rgb(99, 99, 108);
    font-size: 1.2rem;

    svg {
        opacity: .6;
        cursor: pointer;
    }
    &:before {
        content: "";
        display: block;
        height: 4px;
        width: 4px;
        background: rgb(245, 100, 27);
        border-radius: 50%;
    }
`;

export const SettingsContainer = styled.div`
    color: rgb(99, 99, 108);
    font-size: 1.2rem;

    svg {
        opacity: .6;
        cursor: pointer;
    }
`;

export const SessionContainer = styled.div`
    color: rgb(99, 99, 108);

    display: grid;
    grid-template-rows: auto auto;

    span:first-child {
        font-size: .6rem;
    }
    span:last-child {
        font-size: .75rem;
        color: rgb(245, 100, 27);
    }
`;
