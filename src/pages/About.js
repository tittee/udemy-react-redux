import React, { useContext } from 'react';
import MsgContext from './../context/MsgContext';
import Outer from './components/Outer';

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <h2>Message : {useContext(MsgContext)}</h2>
      <Outer></Outer>
    </>
  );
};

export default About;
