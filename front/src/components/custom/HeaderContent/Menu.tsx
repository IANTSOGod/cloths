import { useState } from "react";
import { Link } from "react-router-dom";
import Content from "../MenuContent/SaleContent";
import { Label } from "../../ui/label";
import { Gift } from "lucide-react";
import NewsContent from "../MenuContent/NewsContent";

export default function Menu() {
  const [select, setSelect] = useState(13);

  const listComponents = [
    <Label className="text-lg">New</Label>,
    <Label className="text-lg">Sale</Label>,
    <Label className="text-lg">Women</Label>,
    <Label className="text-lg">Men</Label>,
    <Label className="text-lg">Kids</Label>,
    <Label className="text-lg">Designer</Label>,
    <Label className="text-lg">Shoes</Label>,
    <Label className="text-lg">Accessories</Label>,
    <Label className="text-lg">Home</Label>,
    <Label className="text-lg">Beauty</Label>,
    <Label className="flex">
      <Gift></Gift>
      <Label className="text-lg">Holiday Gift</Label>
    </Label>,
    <Label className="text-lg">Explore</Label>,
  ];

  const listContent = [
    <NewsContent></NewsContent>,
    <Content></Content>,
    <Content></Content>,
    <Content></Content>,
    <Content></Content>,
    <Content></Content>,
    <Content></Content>,
    <Content></Content>,
    <Content></Content>,
    <Content></Content>,
    <Content></Content>,
    <Content></Content>,
  ];

  return (
    <div className="flex justify-center align-center gap-[70px] mt-5 ">
      {listComponents.map((item, index) =>
        index === select ? (
          <div>
            <Link
              to=""
              key={index}
              className="text-pink-500"
              onClick={() => setSelect(13)}
            >
              {item}
            </Link>
            {listContent[index]}
          </div>
        ) : select == 13 ? (
          <Link to="" key={index} onClick={() => setSelect(index)}>
            {item}
          </Link>
        ) : (
          <Link
            to=""
            key={index}
            onClick={() => setSelect(index)}
            className="text-gray-400"
          >
            {item}
          </Link>
        )
      )}
    </div>
  );
}
