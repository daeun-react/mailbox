import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import mail, { watchItems } from "reducer/mail";

const rootReducer = combineReducers({ mail });

export function* rootSaga() {
  yield all([watchItems()]);
}

export default rootReducer;
