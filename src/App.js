import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import UserData from "./store/UserData";
import Home from "./Screens/Home";
import Navbar from "./layouts/Navbar";
import Hirable from "./Screens/Hirable";
import Followers from "./Screens/Followers";
import UserDetails from "./components/UserDetails";
import StateDetails from "./Screens/StateDetails";
import Demo from "./Screens/Demo";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Provider store={UserData}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path=":userdetailbyID" element={<UserDetails />} />

          <Route path="/coviddata" element={<Hirable />}></Route>
          <Route exact path="coviddata/:statecode" element={<StateDetails />} />
          <Route exact path="followers" element={<Followers />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
