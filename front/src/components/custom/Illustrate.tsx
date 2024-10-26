import { Link } from "react-router-dom";
import { Label } from "../ui/label";

interface IllustrateProps {
  src: string;
}
export default function Illustrate({ src }: IllustrateProps) {
  return (
    <div className="mt-10 w-5/6 bg-black mx-auto flex">
      <img src={src} alt="" className="mx-auto w-[600px]" />
      <div className="ml-auto w-1/2 bg-white text-center pt-[200px] bg-gray-200">
        <Label className="text-4xl">Get the party Season started</Label>
        <div className="h-10"></div>
        <Label>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quaerat eum illo eaque saepe veniam sunt ut eos, doloribus a
          asperiores quod reiciendis nisi tempora quis. Quaerat optio voluptas
          totam.
        </Label>
        <div className="h-5"></div>
        <Link to="/dress" className="underline text-2xl">
          Shop now!
        </Link>
      </div>
    </div>
  );
}
