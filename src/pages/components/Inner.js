import React, { useContext } from 'react';
import MsgContext from './../../context/MsgContext';

const Inner = () => {
  const [msg, setMsg] = useContext(MsgContext);

  const changeMsg = (e) => {
    setMsg(Math.random().toString());
  };
  return (
    <>
      <h3>Inner :</h3>
      <button className="btn-primary" onClick={changeMsg}>
        Change Msg by Math
      </button>
    </>
  );
};

export default Inner;
