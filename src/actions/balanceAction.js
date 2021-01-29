export const loading = () => {
  return {
    type: 'LOADIING',
  };
};

export const deposit = () => {
  return { type: 'DEPOSIT', payload: 10 };
};

export const depositAsync = () => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(deposit());
    }, 5000);
  };
};
