import React, { Component } from 'react';
import { MdAttachMoney, MdAdd, MdRemove } from 'react-icons/md';
import { Container, Income, Spending, TransactionsContainer, RowTransaction } from './style';


class LastTransactions extends Component {
  render() {
    return (
      <Container>
        <Income>
          <div>
            <MdAttachMoney />
            <MdAdd style={{'font-size': '.6rem', 'align-self': 'start'}} />
          </div>
          <small>Income</small>
          <span className="amount">$1,200.00</span>
        </Income>
        <Spending>
          <div>
            <MdAttachMoney />
            <MdRemove style={{'font-size': '.6rem', 'align-self': 'start'}} />
          </div>
          <small>Income</small>
          <span className="amount">$1,200.00</span>
        </Spending>
        <h1>HISTORY</h1>
        <a>See all</a>

        <TransactionsContainer>
          <RowTransaction border={true}>
            <span className="title">Uber</span>
            <span className="datetime">2019-08-09 12:37</span>
            <span className="amount">- $19,00</span>
          </RowTransaction>
          <RowTransaction border={false}>
            <span className="title">Uber</span>
            <span className="datetime">2019-08-09 12:37</span>
            <span className="amount">- $19,00</span>
          </RowTransaction>
        </TransactionsContainer>
      </Container>
    );
  }
}
export default LastTransactions;
