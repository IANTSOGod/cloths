import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import AOS from "aos";
import { useEffect } from "react";

export default function AppSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <div
      className="mt-10 w-5/6 bg-sky-200 mx-auto flex"
      data-aos="fade-right"
      data-aos-anchor-placement="center-center"
    >
      <img
        src="./assets/phone.png"
        alt="phone"
        className="w-[200px] h-auto mt-[50px] mb-[50px] ml-[100px]"
      />
      <div className="grid grid-cols-1 ">
        <Label className="text-4xl mt-[50px]">Shopping with your phone</Label>
        <Label>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis
          veniam natus nesciunt voluptate nihil quae officiis error laborum
          rerum, eos hic nam. Ratione dicta voluptates ad, est laudantium
          exercitationem!
        </Label>
        <Button className="w-1/6">
          <Download></Download>Download
        </Button>
      </div>
    </div>
  );
}
