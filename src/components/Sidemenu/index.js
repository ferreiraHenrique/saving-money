import React, { Component } from 'react';
import { Container, LogoContainer, SearchContainer, LinksContainer, LinkItem } from './style';
import logo from '../../assets/images/logo.png';
import { MdSearch, MdChevronRight } from 'react-icons/md';

class Sidemenu extends Component {
  render() {
    return (
      <Container>
        <LogoContainer>
          <img src={logo} />
        </LogoContainer>
        <SearchContainer>
          <input placeholder="Search..." />
          <MdSearch />
        </SearchContainer>
        <LinksContainer>
          <h1>PAYMENTS & TRANSFERS</h1>
          <LinkItem>
            <h2>Phone</h2>
            <MdChevronRight />
          </LinkItem>
          <LinkItem>
            <h2>Internet</h2>
            <MdChevronRight />
          </LinkItem>
        </LinksContainer>
      </Container>
    )
  }
}

export default Sidemenu;
