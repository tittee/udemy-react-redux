import React, { Fragment } from 'react';

const NameTag = (props) => {
  // return <h3 className="name">{!props.name ? props.children : props.name}</h3>;

  if (!props.fname && !props.lname) {
    return (
      <div className="name">
        <h3>Not found!!</h3>
      </div>
    );
  }

  return (
    <>
      {/* <> : Fragment */}
      <div className="name">
        <h3 style={props.style}>Firstname : {props.fname}</h3>
        <h3 style={props.style}>Lastname : {props.lname}</h3>
        {props.fname === 'Wittawat' && (
          <div style={{ color: 'orange', paddingBottom: '10px' }}>VIP</div>
        )}
      </div>
    </>
  );
};

export default NameTag;
