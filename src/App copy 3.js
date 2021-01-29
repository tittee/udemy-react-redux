import React, { useState } from 'react';
import './App.scss';
import ListItem from './components/ListItem/ListItem';
import useList from './hooks/useList';

const initList = [
  { name: 'Tomato', calorie: 40 },
  { name: 'Lemon', calorie: 20 },
  { name: 'Candy', calorie: 105 },
];

function App() {
  const items = useList(initList);
  const [editable, setEditable] = useState(false);

  const removeItemHandle = (e) => {
    e.preventDefault();
    // const filterList = list.filter((v) => v.calorie < 50);
    // setList(filterList);
    items.removeItem(e.target.name);
  };

  const makeEditableHandle = (e) => {
    e.preventDefault();
    setEditable(true);
  };

  const keyPressHandle = (e, i) => {
    if (e.key === 'Enter') {
      setEditable(!editable);
      items.saveItem(i, e.target.value);
      // const copyList = [...list];
      // copyList[i].name = e.target.value;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">useState Hook!! - Hook-useList</h1>

        {items.list.map((val, key) => {
          return (
            <ListItem
              key={key}
              item={val}
              onClick={removeItemHandle}
              editable={editable}
              onDoubleClick={makeEditableHandle}
              onKeyPress={keyPressHandle}
              index={key}
            />
          );
        })}
        {/* <button className="btn-remove" onClick={removeItemHandle}>
          Remove Unhealthy
        </button> */}
      </header>
    </div>
  );
}

export default App;
