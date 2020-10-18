import React from "react";

export default function Pokemon() {
  return (
    <div>
      <h2>Pokemon name: {"Charizard"}</h2>
      <p>Weight: {90} kg</p>
      <p>Awesome: {true ? "Yes!" : "nope,not really"}</p>
      <p>Terrifying: {false ? " Very" : "nah,lovable"}</p>
      <p>What about null? {null}</p>
      <p>And undefined? {undefined}</p>
      {/* //Objects are not valid as a React child (found: object with keys{" "}
      {(fire, water)}). If you meant to render a collection of children, use an
      array instead. */}
      {/* <p>Types: {{ fire: true, water: false }}</p> */}
      <p>Abilities: {["Blaze", "Solar power", "Tough claws", "Drought"]}</p>
    </div>
  );
}
