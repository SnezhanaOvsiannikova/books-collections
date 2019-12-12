import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../root/rootSaga";
import rootReducer from "../reducers";
import { getCollections, getBooks } from "../actions";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

store.dispatch(getCollections());
store.dispatch(getBooks());

export default store;
