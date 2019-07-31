import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickButton } from './reducers/transactionReducer';
import Dashboard from './pages/Dashboard';


class App extends Component {
  state = {
    inputValue: ''
  };

  inputChange = ev => {
    this.setState({inputValue: ev.target.value});
  }

  render() {
    const { 
      clickButton,
      newValue
    } = this.props;

    const { inputValue } = this.state;

    return (
      <Dashboard />
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});
const mapDispatchToProps = dispatch => bindActionCreators({clickButton}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
