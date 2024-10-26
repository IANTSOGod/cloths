import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import AOS from "aos";
import { MakeUpCarousel } from "./Carousel/MakeUp";

export default function TopTabs() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  const TopList = [
    "MakeUp",
    "New Markdowns",
    "Women's Work Clothing, Shoes & Accessories",
    "Men's Work & Business Casual Outfits",
    "Women's New Arrivals",
    "Men's New Arrivals",
  ];

  const [selected, setSelected] = useState("MakeUp");

  return (
    <Tabs
      defaultValue="MakeUp"
      onValueChange={(value) => setSelected(value)}
      data-aos="fade-left"
      data-aos-anchor-placement="center-center"
    >
      <TabsList>
        {TopList.map((top, index) => (
          <TabsTrigger
            value={top}
            key={index}
            onClick={() => setSelected(top)}
            className={`${selected === top ? "border-b-4 border-sky-200" : ""}`}
          >
            <Label>{top}</Label>
          </TabsTrigger>
        ))}
      </TabsList>
      {TopList.map((top, index) => (
        <TabsContent value={top} key={index}>
          <MakeUpCarousel></MakeUpCarousel>
        </TabsContent>
      ))}
    </Tabs>
  );
}
