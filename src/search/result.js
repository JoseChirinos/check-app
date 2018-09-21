import React from 'react';
import './result.css';
import Product from './product';
import Career from './career';

const Result =(props)=>{
  if(!props.open){
    return false;
  }
  return(
    <section className="result-container">
      <div className="result">
        <div className="result-close">
          <button>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
            </svg>
          </button>
        </div>        
        <div className="result-card">
          <span>Nombre:</span>
          <h3>Jose Alex Chirinos Balderrama</h3>
        </div>

        <form>
          <div className="result-career-content">
            <Career/>
            <div className="result-actions">
              <Product/>
            </div>
          </div>
          <button className="result-ok">
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