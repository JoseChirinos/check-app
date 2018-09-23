import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterList from './router-list';
import Main from '../main';
import Login from '../login';

import firebase, { provider, auth } from '../firebase';

class RouterApp extends Component {
  state = {
    auth: true
  }
  handleLogin = (e)=>{
    this.setState({
      auth:true
    })
  }
  /*
  handleLogin = ()=>{
    let self = this;
    // Verifica si tiene usuario logueado
    auth.onAuthStateChanged(function(user){
      if(user){
        self.setState({
          user:user,
          auth:true
        });
        return false;
      }
    });

    // Iniciar Session
    provider.addScope('public_profile');
    auth.signInWithPopup(provider)
    .then(function(user){
      //console.log(user);
      self.setState({
        auth: true,
        user: user
      })
    })
    .catch(function(err){
      console.log(err);
    })
  }*/
  render(){
    return(
      <Router>
        {
          this.state.auth ?
          <Main>
            <RouterList user={ this.state.user }/>
          </Main>
          : <Login handleLogin={ this.handleLogin }/>
        }
      </Router>
    )
  }
}
export default RouterApp;
