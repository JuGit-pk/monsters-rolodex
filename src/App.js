import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((monsters) => this.setState({ monsters }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex  </h1>
        <SearchBox
          placeholder="search monsters"
          changeHandler={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filtered}></CardList>
      </div>
    );
  }
}
export default App;
