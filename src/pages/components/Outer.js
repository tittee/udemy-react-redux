import React, { useContext } from 'react';
import Inner from './Inner';
import MsgContext from './../../context/MsgContext';

const Outer = () => {
  return (
    <>
      <h3>Outer : {useContext(MsgContext)[0]}</h3>
      <Inner></Inner>
    </>
  );
};

export default Outer;
