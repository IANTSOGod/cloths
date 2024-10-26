import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function GetUpdates() {
  return (
    <form className="flex mt-10 gap-x-2 justify-end mr-[50px]">
      <Label className=" text-lg font-bold">Get Email Updates:</Label>
      <Input
        placeholder="Email adress"
        className="w-[300px] border-2 border-black"
      ></Input>
      <Button type="submit" className="w-[300px]">
        Sign Up
      </Button>
    </form>
  );
}
