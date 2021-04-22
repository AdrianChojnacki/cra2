import React, { Component } from "react";
import "./App.css";

const data = [
  { id: 1, title: "Wiadomość numer 1", body: "Zawartość wiadomości numer 1 ..." },
  { id: 2, title: "Wiadomość numer 2", body: "Zawartość wiadomości numer 2 ..." },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `Zawartość wiadomości numer ${index} ...`,
  });
}, 4000);

class App extends Component {
  render() {
    return <div className="App">Działa</div>;
  }
}

export default App;
