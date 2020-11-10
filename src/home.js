import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Route
        exact
        path="/"
        render={() => (window.location = "https://www.facebook.com/xogerard ")}
      />
    );
  }
}
