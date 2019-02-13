import { Provider } from "react-redux";
import React, { Component } from "react";
import { store } from "./js/store";
import Home from "./js/pages/Home";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
