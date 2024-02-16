import data from "@/db.json";
import { THeaderMenu } from "@/types/db";
import Button from "../Button";
import { MdOutlineLockOpen } from "react-icons/md";
const headerMenuItems: THeaderMenu[] = data.header;

export default function Header() {
  return (
    <header className="flex justify-between max-w-[1280px] mx-auto py-10">
      <span>
        <img src="/logo.png" width={218} height={30} />
      </span>
      <MenuItems menus={headerMenuItems} />
      <ButtonAction />
    </header>
  );
}

function MenuItems({ menus }: { menus: THeaderMenu[] }) {
  return (
    <div className="flex items-center gap-x-10">
      {menus.map((menu, key) => (
        <div
          className="font-rubik text-[#2B2C2E] text-lg leading-[30.6px]"
          key={key}
        >
          {menu.name}
        </div>
      ))}
    </div>
  );
}

function ButtonAction() {
  return (
    <div className="flex gap-x-3">
      <Button
        variant="ghost"
        className="flex items-center justify-center gap-x-2 text-base"
      >
        <MdOutlineLockOpen />
        <span>Login</span>
      </Button>
      <Button variant="black" className="text-base ">
        Sign Up
      </Button>
    </div>
  );
}
