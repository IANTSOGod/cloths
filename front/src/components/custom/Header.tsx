import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SignUpDrp } from "./signUpDrp";

import { Package, ShoppingBag } from "lucide-react";
export default function Header() {
  return (
    <div className="flex justify-center align-center gap-[200px] mt-10">
      <Label className="mt-1 text-4xl">NORDSTROM</Label>
      <Input
        className="w-[800px] h-12 text-center border-black rounded-0 text-xl"
        placeholder="Search a product"
      ></Input>
      <div className="flex gap-5">
        <div className="mt-2">
          <SignUpDrp></SignUpDrp>
        </div>
        <Link to="/Purchases" className="flex gap-2 mt-4">
          <Package></Package> Purchases
        </Link>
        <Link to="/Shop">
          <ShoppingBag className="mt-4"></ShoppingBag>
        </Link>
      </div>
    </div>
  );
}
