import React, { Component } from 'react';
import { Container, Content } from './style';
import Sidemenu from '../../components/Sidemenu';
import Header from '../../components/Header';
import Card from '../../components/Card';


export default class DashboardPage extends Component {
  render() {
    return (
      <Container>
        <Sidemenu />
        <Header />
        <Content>
          <Card />
        </Content>
      </Container>
    );
  }
}
