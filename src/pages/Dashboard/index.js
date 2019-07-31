import React, { Component } from 'react';
import { Container } from './style';
import Sidemenu from '../../components/Sidemenu';
import Header from '../../components/Header';


export default class DashboardPage extends Component {
  render() {
    return (
      <Container>
        <Sidemenu />
        <Header />
      </Container>
    );
  }
}
