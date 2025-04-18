import { useWindowSize } from "@react-hook/window-size";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "./components/Slider";
import About from "./components/About";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Hero />
      <Container />
    </div>
  );
}

export default App;
