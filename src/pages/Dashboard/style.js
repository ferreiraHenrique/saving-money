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
