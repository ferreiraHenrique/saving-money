import styled from 'styled-components';


export const Container = styled.div`
  padding: 15px;
  background: white;
  border-radius: 8px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30px auto 1fr;
  grid-row-gap: 30px;

  h1 {
    font-size: .6rem;
    font-weight: 400;
    color: rgb(99,99,108);
    margin: 0;
  }

  a {
    font-size: .6rem;
    color: rgb(245,100,27);
    justify-self: end;
  }
`;

export const Income = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 15px;

  > div {
    grid-column: 1;
    grid-row: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    background: rgba(43,188,84,.1);
    color: rgba(43,188,84,1);
    padding: 5px;
    border-radius: 6px;
  }

  small {
    font-size: .6rem;
    font-weight: 300;
    color: rgb(99,99,108);
  }

  .amount {
    font-size: .8rem;
    grid-column: 2;
    grid-row: 2;
    color: rgb(99,99,108);
  }
`;

export const Spending = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 15px;

  > div {
    grid-column: 1;
    grid-row: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    background: rgba(151,60,61,.1);
    color: rgba(151,60,61,1);
    padding: 5px;
    border-radius: 6px;
  }

  small {
    font-size: .6rem;
    font-weight: 300;
    color: rgb(99,99,108);
  }

  .amount {
    font-size: .8rem;
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    color: rgb(99,99,108);
  }
`;

export const TransactionsContainer = styled.div`
  grid-column: 1 / span 2;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 10px;
`;

export const RowTransaction = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  color: rgb(99,99,108);
  padding-bottom: 10px;

  border-bottom: 1px solid rgba(99,99,108,.1);
  border-bottom-color: ${props => props.border? 'rgba(99,99,108,.1)': 'white'};

  .title {
    font-size: .8rem;
    grid-column: 1 / span 2;
  }

  .datetime {
    font-size: .4rem;
    grid-column: 1;
  }

  .amount {
    font-size: .4rem;
    justify-self: end;
  }
`;
