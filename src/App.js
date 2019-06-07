import React, { Component } from 'react';
import {HashRouter} from "react-router-dom"
import Header from "./Components/Header/Header"
import routes from "./routes"


class App extends Component {
  render() {
    return (
      <HashRouter>
         <Header />
         {routes}

      </HashRouter>
      
    );
  }
}

export default App;