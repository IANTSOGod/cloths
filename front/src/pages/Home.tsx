import { useState, useEffect } from "react";
import Favorite from "../components/custom/Favorite";
import Illustrate from "../components/custom/Illustrate";
import MainHead from "../components/custom/MainHead";
import AppSection from "@/components/custom/AppSection";
import TopTabs from "@/components/custom/TopTabs";

export default function Home() {
  const components = [
    <Illustrate src="./assets/illustrate.png" />,
    <Illustrate src="./assets/illustrate_1.png" />,
    <Illustrate src="./assets/illustrate_3.png" />,
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
      <MainHead></MainHead>
      {components[currentComponentIndex]}
      <AppSection></AppSection>
      <Favorite></Favorite>
      <div className="w-5/6 mx-auto">
        <TopTabs></TopTabs>
      </div>
    </div>
  );
}
