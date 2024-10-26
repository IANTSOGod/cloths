import { SwitchIcon } from "@radix-ui/react-icons";
import { Label } from "../ui/label";

export default function Footer() {
  return (
    <>
      <div className="flex w-full h-[500px] bg-gray-200 mt-[50px]">
        <div className="w-5/6 grid grid-cols-5 gap-x-[10px] gap-y-[5px] pt-10 pl-10">
          <Label className="font-bold text-lg">Customer Service</Label>
          <Label className="font-bold text-lg">About us</Label>
          <Label className="font-bold text-lg">Stores and Services</Label>
          <Label className="font-bold text-lg">Nordstrom Card and reward</Label>
          <Label className="font-bold text-lg">Nordstrom Inc</Label>

          <Label>Contact Us</Label>
          <Label>All brands</Label>
          <Label>Find a store</Label>
          <Label>The nordy club rewards</Label>
          <Label>Nordstrom Rack</Label>

          <Label>Order status</Label>
          <Label>Careers</Label>
          <Label>Free style Help</Label>
          <Label>Pay my Bill</Label>
          <Label>Investor relations</Label>

          <Label>Shipping</Label>
          <Label>Corporate Social Responsibility</Label>
          <Label>Alterations & tailoring</Label>
          <Label>Manage my Nordstrom Card</Label>
          <Label>Press releases</Label>

          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>

          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>

          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>

          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>

          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>

          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>

          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>

          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>
          <Label></Label>
        </div>
        <div className="w-1/6 bg-black"></div>
      </div>
      <div className="flex gap-x-[50px] mt-[-30px] ml-10">
        <Label>Privacy</Label>
        <Label className="flex gap-x-2">
          Your privacy rights
          <SwitchIcon className="text-sky-500"></SwitchIcon>
        </Label>
        <Label>Terms & conditions</Label>
        <Label>©2024 Nordstrom,Inc</Label>
      </div>
    </>
  );
}
