import React, { Component } from 'react';
import firebase, { db } from '../firebase';
/* Components */
import InputSearch from '../search/input-search';
import Message from '../search/message';
import ManillaModal from './manilla-modal';

class Manilla extends Component {
  constructor(props){
    super();
    this.state = {
      student: [],
      isloader:false,
      openModal:false,
      openMessage:false,
      message:''
    };
  }
  handleCloseResult = ()=>{
    this.setState({
      openModal:false,
    });
  }
  handleSearch = (e)=>{
    let self = this;
    e.preventDefault();
    let query = String(e.target.querySelector('#inputSearch').value);
    e.target.querySelector('#inputSearch').blur();

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
          self.showMessage("No esta matriculado");
        }
      })
      .catch(function(error){
        self.showMessage("Error de conexion");
      });
  }
  setStudent = (data)=>{
    this.setState({
      student: data,
      isloader:false,
      openModal:true
    }, ()=>{
      console.log(this.state);
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

  handleUpdate = (e)=>{
    e.preventDefault();
    this.setState({
      isloader:true
    });
    let size = this.state.student.length;
    let send = new Array();
    let error = new Array();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    for(var i=0;i<size;i++){      
      send.push({
        manilla: true,
        manilla_entrega: timestamp
      });
    }
    console.log(send);
    this.updateNow(send);
  }
  updateNow = (send)=>{
    let size = this.state.student.length;
    for(var i=0;i<size;i++){
      let s = send[i];
      db.collection("estudiantes").doc(this.state.student[i].id).update({
        manilla: s.manilla,
        manilla_entrega: s.manilla_entrega
      });
    }
    this.setState({
      isloader:true,
      openModal:false,
    });
  }
  render() {
    return (
      <section>
        <InputSearch 
          type="tel" 
          handleSearch={ this.handleSearch }
        />
        <Message 
          text={ this.state.message } 
          open={ this.state.openMessage }
        />
        <ManillaModal 
          student={ this.state.student }
          open={this.state.openModal }
          isloader={this.state.isloader}
          handleCloseResult={ this.handleCloseResult }
          handleUpdate={ this.handleUpdate }
        />
      </section>
    )
  }
}

export default Manilla;