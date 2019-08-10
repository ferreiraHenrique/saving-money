import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(247, 246, 249);

  display: grid;
  grid-template-columns: 20vw 80vw;
  grid-template-rows: 70px 1fr;
`;

export const Content = styled.div`
  grid-column: 2;
  padding: 30px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 30% 65%;
  grid-row-gap: 5%;
  grid-column-gap: 15px;
`;

export const CardsContainer = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`;

export const NewCardButton = styled.div`
  display: grid;
  grid-row-gap: 10px;
  justify-items: center;

  color: rgb(99,99,108);

  > div {
    background-color: rgba(245,100,27, .1);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    align-self: end;
  }

  span {
    font-size: .8rem;
    font-weight: 300;
  }

  svg {
    color: rgb(245,100,27);
    font-weight: 300;
  }
`;
