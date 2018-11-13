import React from 'react';
import './input-search.css';

const InputSearch = (props)=>(
  <div className="input-search-container">
    <form onSubmit={ props.handleSearch }>
      <input className="input-search" autoComplete="off" type={ props.type } id="inputSearch" placeholder="Buscar..." required="required"/>
      <button
        type="submit"
        className="btn-search"
      >
        <img className="input-search-image" src="/assets/images/search.svg" alt=""/>
      </button>
      <div className="input-search-help">
        (*) La busqueda se lo puede realizar con: <br/>
        <ul>
          <li>Carnet de Identidad</li>
        </ul>
      </div>
    </form>
  </div>
);

export default InputSearch;