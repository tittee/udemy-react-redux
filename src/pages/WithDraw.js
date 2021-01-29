import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const WithDraw = () => {
  const balance = useSelector((state) => state.reducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  const onWithDrawHandle = (e) => {
    dispatch({ type: 'WITHDRAW', payload: 10 });
  };
  return (
    <div>
      <h2 className="name">Balance : {balance} </h2>
      <button onClick={onWithDrawHandle}>WithDraw</button>
      <h3 className="title">{loan ? 'Loan Applied' : 'Loan Needed'}</h3>
    </div>
  );
};

export default WithDraw;
