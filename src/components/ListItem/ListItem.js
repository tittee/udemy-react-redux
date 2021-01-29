import React from 'react';
import './ListItem.scss';

const ListItem = (props) => {
  return (
    <div className="name">
      {props.editable ? (
        <input
          type="text"
          onKeyPress={(e) => props.onKeyPress(e, props.index)}
          defaultValue={props.item.name}
        />
      ) : (
        <h2 onDoubleClick={props.onDoubleClick}>Name : {props.item.name}</h2>
      )}

      <h3>Calorie : {props.item.calorie}</h3>

      <button
        name={props.item.name}
        className="btn-remove"
        onClick={props.onClick}
      >
        Remove
      </button>
    </div>
  );
};

export default ListItem;
