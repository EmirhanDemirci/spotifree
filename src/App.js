import React from 'react';
import { observer } from 'mobx-react';
import LoginForm from './Account/LoginForm';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="app">
        <div className="container">
          <LoginForm />
        </div>
      </div>
    );
  }
}
//make observer to listen to changes in Userstore
export default observer(App);
