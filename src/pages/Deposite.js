import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, depositAsync } from './../actions/balanceAction';

const Deposite = () => {
  const balance = useSelector((state) => state.reducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const loading = useSelector((state) => state.reducer.loading);
  const dispatch = useDispatch();

  const onDepositeHandle = (e) => {
    // dispatch({ type: 'DEPOSIT', payload: 10 });
    dispatch(depositAsync());
  };
  return (
    <>
      {loading ? (
        <h2 className="name">Saving...</h2>
      ) : (
        <h2 className="name">Balance : {balance} </h2>
      )}
      <button onClick={onDepositeHandle}>Deposite</button>
      <h3 className="title">{loan ? 'Loan Applied' : 'Loan Needed'}</h3>
    </>
  );
};

export default Deposite;
