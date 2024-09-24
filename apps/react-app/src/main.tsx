import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import singleSpaReact from "single-spa-react";

const root: React.FC = () => {
  return <App />;
};

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: root,
  errorBoundary() {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
