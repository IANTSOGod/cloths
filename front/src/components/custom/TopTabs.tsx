import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";

export default function TopTabs() {
  
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
    <Tabs defaultValue="MakeUp" onValueChange={(value) => setSelected(value)}>
      <TabsList>
        {TopList.map((top, index) => (
          <TabsTrigger
            value={top}
            key={index}
            onClick={() => setSelected(top)} 
            className={`${selected === top ? "border-b-4 border-black" : ""}`} 
          >
            <Label>{top}</Label>
          </TabsTrigger>
        ))}
      </TabsList>
      {TopList.map((top, index) => (
        <TabsContent value={top} key={index} className="h-[400px] bg-gray-200">
          {top}
        </TabsContent>
      ))}
    </Tabs>
  );
}
