import React from 'react';

const Input = ({ placeholder, style }, ref, onKeyDown) => {
  return (
    <input
      ref={ref}
      type="text"
      placeholder={placeholder}
      style={style}
      onKeyDown={onKeyDown}
    />
  );
};

const ForwardedInput = React.forwardRef(Input);

export default ForwardedInput;
