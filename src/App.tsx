import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout";

import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
};

export default App;
