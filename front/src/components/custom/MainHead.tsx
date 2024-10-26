import Pub from "./HeaderContent/Pub";
import Header from "./HeaderContent/Header";
import { Separator } from "../ui/separator";
import Menu from "./HeaderContent/Menu";
import Top from "./HeaderContent/Top";
import { useState, useEffect } from "react";
export default function MainHead() {
  const components = [
    <Top src="./assets/neck.png"></Top>,
    <Top src="./assets/collection.png"></Top>,
    <Top src="./assets/colection_2.png"></Top>,
  ];

  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComponentIndex(
        (prevIndex) => (prevIndex + 1) % components.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [components.length]);

  return (
    <div>
      <Pub></Pub>
      <Header></Header>
      <Separator className="mt-5 mx-auto w-5/6"></Separator>
      <Menu></Menu>
      {components[currentComponentIndex]}
    </div>
  );
}
