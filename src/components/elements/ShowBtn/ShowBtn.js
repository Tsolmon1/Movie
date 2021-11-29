import React from 'react';
import './ShowBtn.css';

const ShowBtn = (props) => {
  return (
    <div className="rmdb-showbtn" onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  )
}

export default ShowBtn;