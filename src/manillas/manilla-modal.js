import React from 'react';
import './manilla-modal.css';

import moment from 'moment';
import 'moment/locale/es';

/* Components */

import Career from '../search/career';
import Loading from '../common/loading';

const ManillaModal = (props) => {
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
    if(typeof props.student[i].manilla == 'undefined'){
      errs++;
    }
  }
  if(errs == 0){
    let fullDate = '';
    if(props.student[0].manilla_entrega!=null){
      moment.locale('es');
      let day = moment.unix(props.student[0].manilla_entrega.seconds);
      if(moment().diff(day, 'days')>=1){
        fullDate = day.format('LLLL');
      }else{
        fullDate = moment( day ).fromNow();
      }
    }else{
      fullDate = 'Hace unos momentos';
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
            <span className="result-time">{ fullDate }</span>
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
                  <Career name={ data.career } cu={ data.cu } id={data.id} num={ key }/>
              </div>
            ))
          }
          <button type="submit" className="result-ok">
            <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="-62 0 512 512" width="512"><path d="M341.195 207.332c7.258-8.223 11.672-19 11.672-30.793 0-17.098-9.308-32.547-23.86-40.684-8.808-27.601-32.933-47.847-61.456-51.82-9.985-21.039-30.711-35.472-54.156-37.21C196.066 18.097 164.602 0 130.758 0c-25.785 0-50.024 10.078-68.25 28.375-18.211 18.281-28.242 42.586-28.242 68.434 0 1.425.035 2.859.097 4.289C13.188 114.008.02 137.047.02 162.508v.3c-.012.465-.02.93-.02 1.395V265.79c0 21.344 13.633 39.563 32.66 46.445v142.758C32.66 486.426 58.234 512 89.668 512h174.738c31.434 0 57.008-25.574 57.008-57.008v-11.336h7.832c32.05 0 58.125-26.035 58.125-58.031v-121.5c0-27.91-19.84-51.273-46.176-56.793zm16.176 178.293c0 15.457-12.617 28.031-28.125 28.031h-7.832V236.094h7.832c15.508 0 28.125 12.574 28.125 28.031zm-294.71 69.367v-141.62c20.878-5.786 36.257-24.919 36.257-47.583v-42.734c1.145.082 2.297.125 3.453.125 20.504 0 37.965-13.258 44.23-31.645h115.325c4.695 13.77 15.664 24.656 29.488 29.262v234.195c0 14.89-12.117 27.008-27.008 27.008H89.668c-14.89 0-27.008-12.117-27.008-27.008zM30 164.203c0-.316.008-.629.023-.945a13.94 13.94 0 0 0 0-1.512c.297-16.809 10.418-31.695 25.961-38.066a15 15 0 0 0 9.125-16.235 67.845 67.845 0 0 1-.843-10.636c0-17.856 6.925-34.641 19.496-47.262C96.316 36.94 113.008 30 130.758 30c25.562 0 49.16 15.008 60.117 38.238a14.996 14.996 0 0 0 14.8 8.547 36.879 36.879 0 0 1 2.954-.137c15.676 0 29.61 10.586 33.879 25.747a14.999 14.999 0 0 0 14.437 10.933c.164 0 .328 0 .496-.008 21.317.09 39.883 15.317 44.192 36.27a15.002 15.002 0 0 0 9.894 11.191c6.782 2.29 11.34 8.621 11.34 15.758 0 9.176-7.496 16.64-16.71 16.64-9.212 0-16.708-7.464-16.708-16.64 0-8.285-6.719-15-15-15H134.08c-8.282 0-15 6.715-15 15 0 9.176-7.497 16.64-16.712 16.64a16.606 16.606 0 0 1-9.722-3.117c-4.57-3.273-10.586-3.71-15.586-1.14a15 15 0 0 0-8.145 13.34v63.527c0 10.688-8.726 19.383-19.457 19.383-10.727 0-19.457-8.695-19.457-19.383zm0 0" fill="#FFF"/><path d="M240.457 447.453c8.285 0 15-6.715 15-15V251.168c0-8.285-6.715-15-15-15s-15 6.715-15 15v181.285c0 8.285 6.715 15 15 15zm0 0M177.04 447.453c8.284 0 15-6.715 15-15V251.168c0-8.285-6.716-15-15-15-8.286 0-15 6.715-15 15v181.285c0 8.285 6.714 15 15 15zm0 0M113.621 447.453c8.281 0 15-6.715 15-15V318.547c0-8.285-6.719-15-15-15-8.285 0-15 6.715-15 15v113.906c0 8.285 6.715 15 15 15zm0 0" fill="#FFF"/></svg>
          </button>
        </form>

      </div>
    </section>
  )
}

export default ManillaModal;