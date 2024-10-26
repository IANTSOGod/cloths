import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Label } from "../../ui/label";

export default function Pub() {
  const [flagUrl, setFlagUrl] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/madagascar")
      .then((response) => response.json())
      .then((data) => {
        const flag = data[0].flags.svg;
        setFlagUrl(flag);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement du drapeau:", error);
      });
  }, []);

  return (
    <div className="w-full bg-black text-white flex justify-center align-center h-10 pt-2">
      <div className="absolute">
        <Label className="font-bold">Fall Sale is on!</Label> Save up to 50% on
        great styles from top brands.
        <Link to="/Sale" className="underline">
          Sale
        </Link>
      </div>

      <Link to="/Country" className="underline ml-auto mr-[200px]">
        {flagUrl && (
          <div className="flex gap-2">
            <img src={flagUrl} alt="Madagascar flag" className="h-6 w-8" />
            <span className="text-white">Madagascar</span>
          </div>
        )}
      </Link>
    </div>
  );
}
