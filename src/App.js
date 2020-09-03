// feature-1

import React from "react";
import AdminScreen from "../src/screens/AdminScreen";
import HomeScreen from "../src/screens/HomeScreen";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>All right is reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
