import React from "react";

import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title..." />
        <Pokemon />
      </main>
    </div>
  );
}

export default App;
