import React from 'react';
import './styles.css';

const Button = ({text, onClick}) => {
  return <button className='btn' onClick={onClick}>{text}</button>;
};
export default Button;