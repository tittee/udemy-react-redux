import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const balance = useSelector((state) => state.reducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  const onLoanClick = (e) => {
    dispatch({ type: 'APPLY' });
  };
  return (
    <>
      <h2 className="name">Balance : {balance} </h2>
      <h3 className="title">{loan ? 'Loan Applied' : 'Loan Needed'}</h3>
      <button
        className="btn-primary"
        disabled={loan ? true : false}
        onClick={onLoanClick}
      >
        {loan ? 'Loan Applied' : 'Apply Loan'}
      </button>
    </>
  );
};

export default Home;
