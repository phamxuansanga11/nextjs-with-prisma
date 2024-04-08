import React from "react";
import { ModeToggle } from "../ToggleDarkMode";

const Header = () => {
  return (
    <header className="bg-white dark:bg-primary dark:text-white h-[60px] w-full flex justify-between items-center px-5">
      <span>Header</span>
      <ModeToggle />
    </header>
  );
};

export default Header;
