import React from 'react';
import './App.scss';
// import Input from './components/Input';
import NameTag from './components/NameTag';

const makeRed = (BaseComponent) => (props) => {
  const addRed = {
    style: {
      color: 'red',
    },
  };
  const newProps = {
    ...props,
    ...addRed,
  };

  return <BaseComponent {...newProps} />;
};

const removeInline = (BaseComponent) => (props) => {
  const newProps = { ...props };
  delete newProps.style;
  return <BaseComponent {...newProps} />;
};

const RedNameTag = makeRed(NameTag);
const CleanNameTag = removeInline(NameTag);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Name List</h1>
        <RedNameTag fname="Wittawat" lname="kittiwarabud" />
        <CleanNameTag
          style={{ color: 'purple' }}
          fname="Kanhing"
          lname="kittiwarabud"
        />
        <NameTag
          style={{ color: 'green' }}
          fname="Nawaphat"
          lname="Tearasaksri"
        />
        <NameTag fname="Panis" lname="Nakhon Nayok" />
        <NameTag>Children</NameTag>
        {/* <Input placeholder="Enter text" type="text" /> */}
      </header>
    </div>
  );
}

export default App;
