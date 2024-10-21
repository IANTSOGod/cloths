import { useState } from "react";
import { Link } from "react-router-dom";
export default function Menu() {
  const [select, setSelect] = useState(13);

  const list = [
    "New",
    "Sale",
    "Women",
    "Men",
    "Kids",
    "Designer",
    "Shoes",
    "Accessories",
    "Home",
    "Beauty",
    "Holiday Gifts",
    "Explore",
  ];

  return (
    <div className="flex justify-center align-center gap-[70px] mt-5">
      {list.map((item, index) =>
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
            <div className="absolute left-[158px] w-5/6 mt-10 h-[400px] bg-gray-100">
              {list[index]}
            </div>
          </div>
        ) : (
          <Link to="" key={index} onClick={() => setSelect(index)}>
            {item}
          </Link>
        )
      )}
    </div>
  );
}
