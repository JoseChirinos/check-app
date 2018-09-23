import React from 'react';
import './input-search.css';

const InputSearch = (props)=>(
  <div className="input-search-container">
    <form onSubmit={ props.handleSearch }>
      <img className="input-search-image" src="/assets/images/search.svg" alt=""/>
      <input className="input-search" autoComplete="off" type="text" id="inputSearch" placeholder="Buscar..."/>
      <div className="input-search-help">
        (*) La busqueda se lo puede realizar con: <br/>
        <ul>
          <li>1.- Carnet Universitario</li>
          <li>2.- Carnet de Identidad</li>
        </ul>
      </div>
    </form>
  </div>
);

export default InputSearch;