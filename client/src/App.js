import React, { Component } from "react";
// import Navbar from "./components/Navbar/Navbar";
import BookList from "./components/BookList/BookList";
import CharactersList from "./components/Characters/CharactersList";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";



class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section className="instructions">
          <h1>welcome to Bookspace</h1>
          <p>Your faviorte marvel superhero comic book search engine look for a new comic book by superhero save all your heros as trading cards</p>
        </section>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/characters" component={CharactersList} />
        </Switch>
        <footer>®</footer>
      </div>
    );
  }
}
export default App;
