import React, { Component } from 'react';
import { Container, NotificationContainer, SettingsContainer, SessionContainer } from './style';
import { MdNotificationsNone, MdSettings } from 'react-icons/md';


class Header extends Component {
  render() {
    return (
      <Container>
        <h1>Welcome back <span>Henrique</span></h1>
        <NotificationContainer>
          <MdNotificationsNone />
        </NotificationContainer>
        <SettingsContainer>
          <MdSettings />
        </SettingsContainer>
        <SessionContainer>
          <span>end of session:</span>
          <span>09:57</span>
        </SessionContainer>
      </Container>
    )
  }
}
export default Header;
