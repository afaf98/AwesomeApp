import React from "react";

export default function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "Yes!" : "nope,not really"}</p>
      <p>Terrifying: {props.terrifying ? " Very" : "nah,lovable"}</p>

      {/* Checking if data like nulla and undefined get displayed */}
      {/* <p>What about null? {null}</p>
      <p>And undefined? {undefined}</p> */}

      {/* //Objects are not valid as a React child (found: object with keys{" "}
      {(fire, water)}). If you meant to render a collection of children, use an
      array instead. */}
      {/* <p>Types: {{ fire: true, water: false }}</p> */}

      <p>Abilities: {props.abilities}</p>
    </div>
  );
}
