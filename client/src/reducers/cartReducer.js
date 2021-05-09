//payload is always the id
const productsReducer = (state, action) => {
    let temp = { ...state };
  switch (action.type) {
    case "ADD":
      !!temp[action.payload]
        ? (temp[action.payload] += 1)
        : (temp[action.payload] = 1);
      return temp;
    case "REMOVE_ONE":
      if (temp[action.payload] > 1) {
        temp[action.payload] -= 1;
        return temp;
      } else if (temp[action.payload] === 1) {
        delete temp[action.payload];
        return temp;
      }
    case "RESTART":
      return {};
    default:
      return state;
  }
};
export default productsReducer;
