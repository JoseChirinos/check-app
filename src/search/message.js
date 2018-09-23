import React from 'react';
import './message.css';

const Message = (props)=>{
  if(!props.open){
    return false;
  }else{
    return(
      <div className="message">
        {props.text}
      </div>
    );
  }
}

export default Message;