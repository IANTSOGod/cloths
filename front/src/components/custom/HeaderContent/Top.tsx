import { Link } from "react-router-dom";
import { Label } from "../../ui/label";
interface TopProps {
  src: string;
}

export default function Top({ src }: TopProps) {
  return (
    <div className="mt-10 w-5/6 bg-black mx-auto flex">
      <img src={src} className="ml-[200px] w-[300px]"></img>
      <div className="text-white mx-auto mt-10 grid grid-cols-1 text-center">
        <Label className="text-lg font-bold mb-[-15px]">
          New Fall Arrivals
        </Label>
        <Label className="mb-[-10px]">Explore UCG</Label>
        <Label className="underline mb-[-10px]">
          <Link to="/Shop">Shop now!</Link>
        </Label>
      </div>
    </div>
  );
}
