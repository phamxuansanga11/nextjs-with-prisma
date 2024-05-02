"use server";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import IconUser from "../Customs/Ui/Icons/IconUser";
import { ModeToggle } from "../ToggleDarkMode";

const Header = async () => {
  const session = await auth();
  const currentUser = JSON.stringify(session?.user.name);

  return (
    <header className="bg-white dark:bg-primary relative dark:text-white h-[60px] w-full flex justify-between items-center px-5 box-shadow-custom">
      <span>Header</span>
      <div className="flex items-center gap-2">
        {currentUser && (
          <div className="flex items-center gap-2">
            <IconUser />
            <span className="">
              Hi: {currentUser.slice(1, currentUser.length - 1)}
            </span>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button variant="outline" type="submit">
                Đăng xuất
              </Button>
            </form>
          </div>
        )}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
