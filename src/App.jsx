import { useWindowSize } from "@react-hook/window-size";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "./components/Slider";
import About from "./components/About";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Container from "./components/Container";

const mobileImg = "/images/image-hero-mobile.jpg";
const desktopImg = "/images/image-hero-desktop.jpg";

function App() {
  const [width] = useWindowSize();

  const [image, setImage] = useState(desktopImg);

  useEffect(() => {
    if (width < 1000) {
      setImage(mobileImg);
    }
  }, [width]);
  console.log(image);
  return (
    <div>
      <Hero />
      <Container />
    </div>
  );
}

export default App;
