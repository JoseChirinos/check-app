import React from 'react';
import './result.css';
import Product from './product';
import Career from './career';
import Loading from '../common/loading';

const Result =(props)=>{
  if(!props.open){
    return false;
  }
  if(props.isloader){
    return(
      <section className="result-container">
        <div className="result-loader">
          <Loading/>
        </div>
      </section>
    );
  }
  let errs = 0;
  for(let i=0;i<props.student.length;i++){
    if(!props.student[i].check){
      errs++;
    }
  }
  if(errs == 0){
    return(
      <section className="result-container">
        <div className="result">
          <div className="result-close">
            <button onClick={ props.handleCloseResult }>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
              </svg>
            </button>
          </div>      
          <div className="result-card">
            <span>Universitario:</span>
            <h3>{props.student[0].full_name}</h3>
          </div>
          {
            props.student.map( (data,key)=>(
              <Career name={ data.career } cu={ data.cu } id={data.id} num={ key } key={ data.id }/>
            ))
          }
          <div className="result-card">
            <span className="result-yeah">Ya se entrego =)</span>
          </div>
        </div>
      </section>
    )
  }
  
  return(
    <section className="result-container">
      <div className="result">
        <div className="result-close">
          <button onClick={ props.handleCloseResult }>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
            </svg>
          </button>
        </div>      
        <div className="result-card">
          <span>Nombre:</span>
          <h3>{props.student[0].full_name}</h3>
        </div>

        <form name="receive" onSubmit={ props.handleUpdate }>
            {
              props.student.map((data, key)=>(
                <div className="result-career-content" key={data.id}>
                  {
                    data.check ?
                    <div>
                      <Career name={ data.career } cu={ data.cu } id={data.id} num={ key }/>
                      <div className="result-actions" style={{ display:'none'}}>
                        <Product data={data} num={ key }/>
                      </div>
                      <span className="result-yeah">Ya se entrego =)</span>
                    </div>
                    :
                    <div>
                      <Career name={ data.career } cu={ data.cu } id={data.id} num={ key }/>
                      <div className="result-actions">
                        <Product data={data} num={ key }/>
                      </div>
                    </div>
                  }
                </div>
              ))
            }
          <div className="result-cellphone-container">
            <label htmlFor="cellphone">Número de Celular:</label>
            <input className="result-cellphone" autoComplete="off" type="text" id="cellphone" name="cellphone" placeholder="Número de Celular"/>
          </div>
          <button type="submit" className="result-ok">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z"></path>
            </svg>
          </button>
        </form>

      </div>
    </section>
  )
};

export default Result;