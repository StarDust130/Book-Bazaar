"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div>
      <header className="">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block " href="/">
            <span className="sr-only">Home</span>

            <Logo />
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className=""
                    href="/"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=""
                    href="/"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=""
                    href="/"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=""
                    href="/"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=""
                    href="/"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=""
                    href="/"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link href="/">
                  <Button variant={"default"}>Login</Button>
                </Link>

                <Link href="/" className="hidden md:block">
                  <Button variant={"ghost"}>Register</Button>
                </Link>
              </div>

              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <span className="md:hidden dark:text-white">
                      <RxHamburgerMenu />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>
                      <Link href="/">Register</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <span className="md:hidden block">
                      <ModeToggle />
                    </span>
                    <DropdownMenuSeparator />
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
              <span className="hidden md:block">
                <ModeToggle />
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
