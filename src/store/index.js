'use client';

import React, { createContext, PureComponent } from "react";
import { CardItems, initialState } from "./reducer";

export const commonContext = createContext();

export class AppProvider extends PureComponent {
  constructor() {
    super();
    this.state = {
      ...initialState,
      dispatch: this.dispatch,
    };
  }

  dispatch = (action) => {
    this.setState((prevState) => CardItems(prevState, action));
  };

  render() {
    return (
      <commonContext.Provider value={this.state}>
        {this.props.children}
      </commonContext.Provider>
    );
  }
}
