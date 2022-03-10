import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

const initialState = { value: 0 };

const INCREMENT = "INCREMENT";
const ADD = "ADD";

const incrementAction = () => ({ type: INCREMENT });
const addAction = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

const store = createStore(reducer);

console.log("store");
console.log(store);

const subscriber = () => console.log("SUBSCRIBER", store.getState());
store.subscribe(subscriber);

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(addAction(1000));

console.log("state");
console.log(store.getState());
