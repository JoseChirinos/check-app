import React, { Component } from 'react';
import Granim from 'granim';
import './login.css';

class Login extends Component {
  componentDidMount(){
    const granimInstance = new Granim({
        element: '#loginBackground',
        name: 'loginBackground',
        direction: 'top-bottom', // 'diagonal', 'top-bottom', 'radial'
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#01b9e3', '#344dff'],
                    ['#344dff', '#1033ff'],
                    ['#1033ff', '#ae43ff'],
                    ['#ae43ff', '#63a0fe'],
                    ['#63a0fe', '#01b9e3']
                ]
            }
        }
    });
  }
  render(){
    let { 
      emailInput,
      passwordInput,
      signIn
    } = this.props;
    return(
      <div className="login-container">
        <canvas 
          id="loginBackground"
          className="loginBackground"
        ></canvas>
        <form className="loginForm" onSubmit={ signIn }>
          <div className="refreshLogo-login">
            <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 -16 512 512" width="512"><path d="M159.145 184.645c-25.133-10.48-53.2 10.593-64.657 37.996-12.773 30.527-4.527 63.148 18.367 72.714 22.926 9.508 51.887-7.484 64.66-37.996 12.77-30.527 4.524-63.148-18.37-72.714zM136 270c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0M242.023 302.535C244.617 307.367 251.211 315 256 315c4.672 0 11.074-7.281 13.813-12.54-5.524-2.401-22.458-2.358-27.79.075zm0 0" fill="#FFF"/><path d="M256 30C115.39 30 0 144.39 0 285c0 125.742 91.559 195 256 195s256-69.258 256-195c0-140.61-115.39-255-256-255zM101.281 323.043c-38.156-15.969-53.625-66.195-34.48-111.973 19.16-45.777 65.758-70.078 103.918-54.113 38.156 15.969 53.625 66.195 34.48 111.973-18.437 44.074-64.469 70.601-103.918 54.113zM286 420h-60c-24.813 0-45-20.188-45-45 0-8.29 6.71-15 15-15s15 6.71 15 15c0 8.277 6.723 15 15 15h15v-48.621c-17.934-8.215-30-29.149-30-41.379 0-17.387 18.926-30 45-30s45 12.613 45 30c0 12.23-12.066 33.164-30 41.379V390h15c8.277 0 15-6.723 15-15 0-8.29 6.71-15 15-15s15 6.71 15 15c0 24.813-20.188 45-45 45zm124.719-96.957c-40.078 16.71-85.735-10.648-103.918-54.113-19.145-45.774-3.676-96.004 34.48-111.973 38.043-15.906 84.774 8.309 103.918 54.113 19.145 45.778 3.676 96.004-34.48 111.973zm0 0" fill="#FFF"/><path d="M352.855 184.645c-22.894 9.566-31.144 42.187-18.37 72.714 12.773 30.512 41.765 47.504 64.66 37.996 22.894-9.562 31.14-42.187 18.367-72.714-11.36-27.176-39.535-48.508-64.657-37.996zM376 270c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0M421 0c-21.52 0-41.68 7.953-57.547 21.195 56.215 22.98 104.309 63.47 135.902 114.594C507.45 122.125 512 106.387 512 90c0-49.629-41.371-90-91-90zm0 0M148.547 21.195C132.68 7.953 112.52 0 91 0 41.371 0 0 40.371 0 90c0 16.387 4.55 32.125 12.645 45.79C44.238 84.663 92.332 44.18 148.547 21.194zm0 0" fill="#FFF"/></svg>
          </div>
          <div className="refreshTitle-login">
            Panda Fest
          </div>
          <input 
            type="email" 
            ref={ emailInput}
            className="loginInput"
            placeholder="Ingrese su email"
            required
          />
          <input 
            type="password"
            ref={ passwordInput}
            className="loginInput"
            placeholder="Ingrese su password"
            required
          />
          {
            this.props.messageToggle ?
            <div className="loginMessage">
              { this.props.message }
            </div>
            :
            <span></span>

          }
          <input 
            type="submit" 
            value="Ingresar"
            className="loginButton"
          />
        </form>
      </div>
    )
  }
}
export default Login;