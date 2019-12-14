import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store/store";
import Collections from "./components/collections/Collections";
import Collection from "./components/collection/Collection";
import Books from "./components/books/Books";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Collections} />
        <Route path="/collection/:id" component={Collection} />
        <Route path="/books" component={Books} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
