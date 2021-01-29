import React, { useContext } from 'react';
import MsgContext from './../context/MsgContext';

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h2>Message : {useContext(MsgContext)}</h2>
    </>
  );
};

export default Home;
