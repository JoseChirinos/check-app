import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterList from './router-list';
import Main from '../main';
import Login from '../login';

import { AuthService } from '../services/auth-service';

class RouterApp extends Component {
  constructor(props){
    super();
    let user  =  AuthService.checkSessionOff();
    if(user){
      this.state = {
        auth: true,
        user: user,
        messageToggle: false,
        message:''
      }
    }else{
      this.state = {
        auth: false,
        user: {},
        messageToggle: false,
        message:''
      }
    }
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }
  signIn = (e)=> {
    e.preventDefault();
    let self = this;
    let email = this.emailInput.current.value;
    let password = this.passwordInput.current.value;
    AuthService.signIn(email, password,(user)=>{
      AuthService.createSession(user);
      self.setState({
        auth: true,
        user,
        messageToggle: false
      })
    },(error)=>{
      if(error.code==="auth/user-not-found"){
        self.setState({
          messageToggle: true,
          message:'Usted no esta registrado'
        })
      }
      if(error.code==="auth/wrong-password"){
        self.setState({
          messageToggle: true,
          message:'Contraseña incorrecta'
        })
      }
    })
  }
  signOut = ()=>{
    AuthService.signOut();
    this.setState({
      auth:false
    })
  }
  render(){
    return(
      <Router>
        {
          this.state.auth ?
          <Main
            signOut = { this.signOut }
          >
            <RouterList user={ this.state.user }/>
          </Main>
          : <Login 
              signIn = { this.signIn }
              emailInput = { this.emailInput }
              passwordInput = { this.passwordInput }
              messageToggle = { this.state.messageToggle }
              message = { this.state.message }
            />
        }
      </Router>
    )
  }
}
export default RouterApp;
