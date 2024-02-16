import data from "@/db.json";
import { THeaderMenu } from "@/types/db";
import Button from "../Button";
import { MdOutlineLockOpen } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import cn from "classnames";

const headerMenuItems: THeaderMenu[] = data.header;

export default function Header() {
  return (
    <header className="flex justify-between max-w-[1280px] mx-auto py-10 lg:px-0 lg:items-start items-center px-10">
      <span>
        <img src="/logo.png" width={218} height={30} />
      </span>
      <MenuItems menus={headerMenuItems} />
      <div className="lg:flex hidden gap-x-3">
        <ButtonAction />
      </div>
    </header>
  );
}

function MenuItems({ menus }: { menus: THeaderMenu[] }) {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden block">
        <div
          className="w-14 h-14 bg-gray-900 text-white flex justify-center items-center rounded-lg"
          onClick={() => setOpened((o) => !o)}
        >
          <RxHamburgerMenu size={30} />
        </div>
        <DropdownMobileMenu
          menus={menus}
          opened={opened}
          setOpened={setOpened}
        />
      </div>
      {/* DESKTOP */}
      <div className="hidden items-center gap-x-10 lg:flex">
        {menus.map((menu, key) => (
          <div
            className="font-rubik text-[#2B2C2E] text-lg leading-[30.6px]"
            key={key}
          >
            {menu.name}
          </div>
        ))}
      </div>
    </>
  );
}

function DropdownMobileMenu({
  menus,
  opened,
  setOpened,
}: {
  menus: THeaderMenu[];
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {opened && <div className="bg-black/30 fixed inset-0 z-50"></div>}
      <div
        className={cn(
          "absolute left-0 right-0 bg-white z-50 transition-all pt-5",
          {
            "top-0": opened,
            "top-[-100%]": !opened,
          }
        )}
      >
        <div
          className="absolute right-6 top-6 z-[999]"
          onClick={() => setOpened(false)}
        >
          <IoCloseOutline size={30} color="gray" />
        </div>

        <div className="flex flex-col gap-y-7 py-8 items-center">
          {menus.map((menu, key) => (
            <div
              className="font-rubik text-[#2B2C2E] text-lg leading-[30.6px]"
              key={key}
            >
              {menu.name}
            </div>
          ))}
        </div>
        <hr />
        <div className="flex justify-center gap-x-3 my-4 ">
          <ButtonAction />
        </div>
      </div>
    </>
  );
}

function ButtonAction() {
  return (
    <>
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
    </>
  );
}
