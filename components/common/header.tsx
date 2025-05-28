import NavLink from "./nav-link";
import React from "react";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 lg:px-8 px-2 mx-auto bg-slate-950 text-white  mb-4">
      <div className="flex lg:flex-1 lg:justify-start">
        <NavLink
          href="/"
          className="font-bold text-lg flex items-center gap-1 lg:gap-2 shrink-0"
        >
          <FileText className="h-7 w-7 lg:w-9 lg:h-9 text-cyan-700 hover:rotate-12" />
          <span className="font-extrabold lg:text-xl text-cyan-500 ">
            SnapSumm
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center lg:flex-1 gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/dashboard">Your summaries</NavLink>
        </SignedIn>
      </div>
      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>Pro</div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>

        <SignedOut>
          <div>
            <NavLink href="/sign-in">Sign In</NavLink>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Header;
