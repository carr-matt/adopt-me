import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Maddy",
      breed: "Lab/Pit/Good Girl mix",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Socks",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Cooper",
      breed: "Dachshund/Chihuahua mix",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
