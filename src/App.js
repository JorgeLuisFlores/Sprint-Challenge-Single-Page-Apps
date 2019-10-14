import React from "react";
import { Route, NavLink } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";

export default function App() {
  return (
    <main>
      <Header />
      <NavLink exact to="/">
        Home
      </NavLink>
      <br />
      <NavLink exact to="/characters">
        Characters
      </NavLink>
      <br />
      <NavLink exact to="/location">
        Locations
      </NavLink>

      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/location" component={LocationList} />
    </main>
  );
}
