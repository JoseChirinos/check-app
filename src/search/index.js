import React, { Component } from 'react';
import { db } from '../firebase';

import InputSearch from './input-search';
import Result from './result';
import Message from './message';

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      isloader:true,
      openModal:false,
      openMessage:false,
      message:'',
      student:[],
    }
  }
  handleCloseResult = ()=>{
    this.setState({
      openModal:false,
    });
  }
  handleSearch = (e)=>{
    e.preventDefault();
    this.setState({
      open:true,
    })
    let query = String(e.target.querySelector('#inputSearch').value);
    let self = this;
    if(query.split('-').length===1){
      db.collection("estudiantes").where("ci","==",query)
        .get()
        .then(function(docs){
          if(docs.size>0){
            let result = new Array();
            docs.forEach(function(doc){
              result.push(doc.data());
            });
            self.setStudent(result);
          }else{
            self.showMessage("No esta registrado");
          }
        })
        .catch(function(error){
          self.showMessage("Error de conexion");
        });
    }else if(query.split('-').length===2){
      db.collection("estudiantes").where("cu","==",query)
        .get()
        .then(function(docs){
          if(docs.size>0){
            let result = new Array();
            docs.forEach(function(doc){
              result.push(doc.data());
            });
            self.setStudent(result);
          }else{
            self.showMessage("No esta registrado");
          }
        })
        .catch(function(error){
          self.showMessage("Error de conexion");
        });
    }
  }
  handleUpdate = (e)=>{
    e.preventDefault();
    this.setState({
      isloader:true
    });
    let size = this.state.student.length;
    let send = new Array();
    let error = new Array();
    for(var i=0;i<size;i++){
      let plato = '';
      let bebida = '';
      for(var k=0;k<2;k++){
        if(document.getElementsByName("product_"+i+"_1")[k].checked){
          plato = document.getElementsByName("product_"+i+"_1")[k].value;
        }
      }
      for(var j=0;j<2;j++){
        if(document.getElementsByName("product_"+i+"_2")[j].checked){
          bebida = document.getElementsByName("product_"+i+"_2")[j].value;
        }
      }
      if(plato==='' || bebida===''){
        error.push('Seleccione comida y bebida');
      }else{
        send.push({
          plato,
          bebida
        });
      }
    }
    if(document.querySelector("#cellphone").value===""){
      error.push('Ingrese celular para el sorteo');
    }else{
      send[0].cellphone = document.querySelector("#cellphone").value;
    }
    if(error.length===0){
      this.updateNow(send);
    }else{
      this.setState({
        isloader:false,
      });
      this.showMessage(error[0]);
    }
  }
  updateNow = (send)=>{
    let size = this.state.student.length;
    for(var i=0;i<size;i++){
      let s = send[i];
      let sg = send;
      db.collection("estudiantes").doc(this.state.student[i].id).update({
        check: true,
        plato: s.plato,
        bebida: s.bebida,
        cellphone: sg[0].cellphone
      });
    }
    this.setState({
      isloader:true,
      openModal:false,
    });
  }
  setStudent = (data)=>{
    this.setState({
      student: data,
      isloader:false,
      openModal:true
    });
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

  render(){
    return(
      <section>
        <InputSearch handleSearch={ this.handleSearch }/>
        <Result student={ this.state.student } open={this.state.openModal } isloader={this.state.isloader} handleCloseResult={ this.handleCloseResult } handleUpdate={ this.handleUpdate }/>
        <Message text={ this.state.message } open={ this.state.openMessage }/>
      </section>
    )
  }
};

export default Search;