import React, { Component } from 'react';
import './users.css';
/* Components */
import { access } from '../firebase'; 
import Message from '../search/message';
import { AuthService } from '../services/auth-service';

class Users extends Component {
  constructor(props){
    super();
    this.state = {
      permission: false,
      message: '',
      openMessage:false,
    }
    this.access = React.createRef();
    this.email = React.createRef();
    this.ci = React.createRef();
  }
  handleChecking = (e)=>{
    e.preventDefault();
    if(this.access.current.value===access){
      this.updatePermission();
    }else{
      this.showMessage('te vas al carajo');
    }
  }
  updatePermission = ()=>{
    this.setState({
      permission: true
    })
  }
  showMessage = (text)=>{
    let self = this;
    this.setState({
      message: text,
      openMessage:true,
    });
    setTimeout(function(){
      self.setState({
        openMessage:false,
      })
    },2500);
  }
  saveUser = (e)=>{
    e.preventDefault();
    let self = this;
    let email = this.email.current.value;
    let ci = this.ci.current.value;
    AuthService.createUser(email,ci, (user)=>{
      console.log(user);
      self.showMessage('Registrado con exito');
    },(error)=>{
      if(error.code === "auth/email-already-in-use"){
        self.showMessage('Ya esta registrado');
      }else{
        self.showMessage('No se pudo registrar');
      }
    });
  }
  render() {
    if(!this.state.permission){
      return(
        <div>
          <section className="users">
            <form 
              onSubmit={ this.handleChecking } 
              className="form-password"
            >
              <input 
                type="password"
                ref = { this.access }
                placeholder="Acceso privado"            
                className="input-access input-password"
              />
            </form>
            <Message 
              text={ this.state.message } 
              open={ this.state.openMessage }
            />
          </section>
        </div>
      )
    }
    return (
      <div className="form-user">
        <h3 className="form-user-title">Agregar Usuario</h3>
        <form onSubmit={ this.saveUser }>
          <label htmlFor="emailUser">Correo Electronico</label>
          <input 
            type="email"
            id="emailUser"
            ref = { this.email }
            placeholder="Ingrese Email"            
            className="input-access input-user"
            required="required"
          />
          <label htmlFor="ciUser">Carnet de Identidad</label>
          <input 
            type="text"
            id="ciUser"
            ref = { this.ci }
            placeholder="Ingrese Carnet Identidad"            
            className="input-access input-user"
            required="required"
          />
          <button type="submit">
            Registrar Usuario
          </button>
        </form>
        <Message 
          text={ this.state.message } 
          open={ this.state.openMessage }
        />
      </div>
    )
  }
}

export default Users;