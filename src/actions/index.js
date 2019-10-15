const INCREMENT = 'INCREMENT';

export const toggle = (idx) => {
  return {
    type: INCREMENT,
    addBy: idx,
  };
};
