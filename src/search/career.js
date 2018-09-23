import React from 'react';
import './career.css';

const Career = (props)=>{
  let career_name = '';
  let color = '';
  if(props.name === 'sis'){
    career_name = 'Ing. Sistemas';
    color = '#2196F3';
  }
  if(props.name === 'cico'){
    career_name = 'Ing. Ciencias de la Computación';
    color = '#673AB7';
  }
  if(props.name === 'dad'){
    career_name = 'Ing. Diseño y Animación Digital';
    color = '#F44336';
  }
  if(props.name === 'tei'){
    career_name = 'Ing. Tecnologias de la Información';
    color = '#4CAF50';
  }
  if(props.name === 'tel'){
    career_name = 'Ing. Telecomunicaciones';
    color = '#3F51B5';
  }
  return(
    <div className="career" style={{ backgroundColor: color }}>
      <h3>
        {career_name}
      </h3>
      <small>( { `Carnet Universitario: ${props.cu} - Código: ${props.id}` } )</small>
      <span>{(props.num + 1)}</span>
    </div>
  )
}

export default Career;