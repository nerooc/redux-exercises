const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value,
      };

    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value,
      };

    case "STORE":
      return {
        ...state,
        results: [...state.results, state.counter],
      };

    case "DELETE":
      const newArray = [...state.results];
      newArray.splice(action.value, 1);

      return {
        ...state,
        results: newArray,
      };

    default:
      return state;
  }
};

export default reducer;
