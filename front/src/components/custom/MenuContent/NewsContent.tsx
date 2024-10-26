import { Label } from "../../ui/label";
import { Separator } from "../../ui/separator";

export default function NewsContent() {
  return (
    <div
      className="absolute left-[159px] w-5/6 mt-10 h-[400px] bg-white flex border-b-4 border-gray-200"
      transition-style="in:wipe:down"
    >
      <div className="w-5/6 grid grid-cols-5 gap-x-[20px]">
        <Label className="font-bold text-lg">News: Get inspired</Label>
        <Label className="font-bold text-xl">Women</Label>
        <Label className="font-bold text-xl">Men</Label>
        <Label className="font-bold text-xl">Kids</Label>
        <Label className="font-bold text-xl">Designer</Label>
        <Separator className="mt-[-32px] w-4/5"></Separator>
        <Label className="text-gray-500">Clothing</Label>
        <Label className="text-gray-500">Clothing</Label>
        <Label className="text-gray-500">Girls</Label>
        <Label className="text-gray-500">Women</Label>
        <Label className="font-bold">Women's under $100</Label>
        <Label className="text-gray-500">Shoes</Label>
        <Label className="text-gray-500">Shoes</Label>
        <Label className="text-gray-500">Boys</Label>
        <Label className="text-gray-500">Men</Label>
        <Label className="font-bold">Men's under $100</Label>
        <Label className="text-gray-500">Handbags & Wallet</Label>
        <Label className="text-gray-500">Accessories</Label>
        <Label className="text-gray-500">Baby girls</Label>
        <Label className="font-bold">Home</Label>
        <Label className="font-bold">New in cold weather for women</Label>
        <Label className="text-gray-500">Jewelry</Label>
        <Label></Label>
        <Label className="text-gray-500">Baby boys</Label>
        <Label className="font-bold">Beauty</Label>
        <Label className="font-bold">New in cold weather for men</Label>
        <Label className="text-gray-500">Accessories</Label>
        <Label></Label>
        <Label className="text-gray-500">Baby gears & essentials</Label>
        <Label className="font-bold">Women's contemporary</Label>
        <Label className="font-bold">Sneaker Release Calendar</Label>
        <Label></Label>
        <Label></Label>
        <Label></Label>
        <Label className="font-bold">Men's advanced modern</Label>
        <Label className="font-bold">Beauty Release Calendar</Label>
        <Label></Label>
        <Label></Label>
        <Label></Label>
        <Label className="font-bold">Young adult</Label>
      </div>
      <div className="w-1/6 bg-gray-200" transition-style="in:wipe:right">
        <img src="./assets/colection_2.png" alt="" />
        <div className="grid grid-cols-1">
          <Label className="mx-auto text-2xl">New Arrivals</Label>
          <Label className="mt-[100px] underline mx-auto"> Get inspired</Label>
        </div>
      </div>
    </div>
  );
}
