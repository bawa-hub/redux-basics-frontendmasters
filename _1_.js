import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

// using simple function
const makeLouderRepeatThreeTimesAndEmbolden = (string) =>
  embolden(repeatThreeTimes(makeLouder("hello")));

// using redux compose
const makeLouderRepeatThreeTimesAndEmbolden1 = compose(
  embolden,
  repeatThreeTimes,
  makeLouder
);
console.log(makeLouderRepeatThreeTimesAndEmbolden("hello"));
console.log(makeLouderRepeatThreeTimesAndEmbolden1("hello"));
