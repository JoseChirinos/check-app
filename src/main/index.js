import React, { Component } from 'react';
import './main.css';
class Main extends Component{
  render(){
    return(
      <div>
        <nav>
          <span className="nav-email">
            <a href="/">Panda Fest</a>
          </span>
          <span className="nav-action">
            <a href="void:;" onClick={ this.props.signOut }>salir</a>
          </span>
        </nav>
        { this.props.children }
      </div>
    )
  }
};

export default Main;