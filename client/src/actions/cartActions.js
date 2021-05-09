export const add = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const removeOne = (data) => {
  return {
    type: "REMOVE_ONE",
    payload: data,
  };
};
export const restart = (data) => {
  return {
    type: "RESTART",
  };
};
