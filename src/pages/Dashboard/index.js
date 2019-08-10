import React, { Component } from 'react';
import { MdAdd } from 'react-icons/md';
import { Container, Content, CardsContainer, NewCardButton } from './style';
import Sidemenu from '../../components/Sidemenu';
import Header from '../../components/Header';
import Card from '../../components/Card';
import LastTransactions from '../../components/LastTransactions';


export default class DashboardPage extends Component {
  render() {
    return (
      <Container>
        <Sidemenu />
        <Header />
        <Content>
          <CardsContainer>
            <Card />
            <NewCardButton>
              <div>
                <MdAdd />
              </div>
              <span>Add card</span>
            </NewCardButton>
          </CardsContainer>
          <LastTransactions />
        </Content>
      </Container>
    );
  }
}
