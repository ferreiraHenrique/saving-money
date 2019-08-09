import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px 10px 10px;
  background: rgb(245,100,27);
  border-radius: 8px;

  display: grid;
  grid-template-rows: repeat(3, 1fr);

  span {
    color: white;
    opacity: .8;
    font-size: .8rem;
  }

  h1 {
    font-size: 1.2rem;
    letter-spacing: 2px;
    color: white;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: white;
    text-align: right;
  }
`;
