import React, { Component } from 'react';
import { db } from '../firebase';

class Carreras extends Component{
  constructor(props){
    super(props);
    this.state={
      sis:0,
      cico:0,
      tei:0,
      dad:0,
      tel:0,
      all:0,
      chelas:0,
      sodas:0,
      allTele:[]
    }
  }
  verSoda = ()=>{
    let self = this;
    db.collection("estudiantes").where("bebida","==","Soda")
      .where("check","==",true)
      .get()
      .then(function(docs){
        self.setState({
          sodas:docs.size
        })
      })
      .catch(function(error){
        self.showMessage("Error de conexion");
      });
  }
  verChelas = ()=>{
    let self = this;
    db.collection("estudiantes").where("bebida","==","Cerveza")
      .where("check","==",true)
      .get()
      .then(function(docs){
        self.setState({
          chelas:docs.size
        })
      })
      .catch(function(error){
        self.showMessage("Error de conexion");
      });
  }
  verSistemas = ()=>{
    let self = this;
    db.collection("estudiantes").where("career","==","sis")
      .where("check","==",true)
      .get()
      .then(function(docs){
        self.setState({
          sis:docs.size
        })
      })
      .catch(function(error){
        self.showMessage("Error de conexion");
      });
  }
  verCico = ()=>{
    let self = this;
    db.collection("estudiantes").where("career","==","cico")
      .where("check","==",true)
      .get()
      .then(function(docs){
        self.setState({
          cico:docs.size
        })
      })
      .catch(function(error){
        self.showMessage("Error de conexion");
      });
  }
  verTei = ()=>{
    let self = this;
    db.collection("estudiantes").where("career","==","tei")
      .where("check","==",true)
      .get()
      .then(function(docs){
        self.setState({
          tei:docs.size
        })
      })
      .catch(function(error){
        self.showMessage("Error de conexion");
      });
  }
  verDis = ()=>{
    let self = this;
    db.collection("estudiantes").where("career","==","dad")
      .where("check","==",true)
      .get()
      .then(function(docs){
        self.setState({
          dad:docs.size
        })
      })
      .catch(function(error){
        self.showMessage("Error de conexion");
      });
  }
  verTel = ()=>{
    let self = this;
    db.collection("estudiantes").where("career","==","tel")
      .where("check","==",true)
      .get()
      .then(function(docs){
        self.setState({
          tel:docs.size
        })
      })
      .catch(function(error){
        self.showMessage("Error de conexion");
      });
  }
  verAll = ()=>{
    let self = this;
    db.collection("estudiantes").where("check","==",true)
      .get()
      .then(function(docs){
        self.setState({
          all:docs.size
        })
      })
      .catch(function(error){
        self.showMessage("Error de conexion");
      });
  }
  getDatosAll = ()=>{
    let self = this;
    db.collection("estudiantes")
    .where("career","==","tel")
    .where("check","==",true)
      .get()
      .then(function(docs){
        let result = new Array();
        console.log(result)
        docs.forEach(function(doc){
          result.push(doc.data());
        });
        self.setState({
          allTele: result
        })
      })
      .catch(function(error){
        console.log("error");
      });
  }
  
  render(){
    return(
      <div>
        {/*
        
        <h4>Sistemas</h4>
        <h1>{ this.state.sis }</h1>
        <button onClick={ this.verSistemas }>ver</button>
        <h4>Ciencias de la Computacion</h4>
        <h1>{ this.state.cico }</h1>
        <button onClick={ this.verCico }>ver</button>
        <h4>Tecnologias de la Informacion</h4>
        <h1>{ this.state.tei }</h1>
        <button onClick={ this.verTei }>ver</button>
        <h4>Diseño Animacion Digital</h4>
        <h1>{ this.state.dad }</h1>
        <button onClick={ this.verDis }>ver</button>
        <h4>Telecom</h4>
        <h1>{ this.state.tel }</h1>
        <button onClick={ this.verTel }>ver</button>

        <h3>Total:</h3>
        <h1>{ this.state.all }</h1>
        <button onClick={ this.verAll }>ver</button>

        <h3>Total Sodas:</h3>
        <h1>{ this.state.sodas }</h1>
        <button onClick={ this.verSoda }>ver</button>

        <h3>Total Chelas:</h3>
        <h1>{ this.state.chelas }</h1>
        <button onClick={ this.verChelas }>ver</button>
        */}
        <button onClick={ this.getDatosAll }>Get Datos</button>

        <table>
          <tr>
            <td>Nombre</td>
            <td>CU</td>
            <td>CI</td>
            <td>Celular</td>
          </tr>
            {
              this.state.allTele.map((i)=>(
                <tr>
                  <td>{ i.full_name }</td>
                  <td>{ i.cu }</td>
                  <td>{ i.ci }</td>
                  <td>{ i.cellphone }</td>
                </tr>
              ))
            }
        </table>
        
        
      </div>
    )
  }
}
export default Carreras;