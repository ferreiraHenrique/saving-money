import React, { Component } from 'react';
import { Container } from './style';


class Card extends Component {
  render() {
    return (
      <Container>
        <span>Bank</span>
        <h1>0317 **** **** 5042</h1>
        <h2>$1,554.57</h2>
      </Container>
    );
  }
}
export default Card;
