import React, { Fragment } from "react";
import {
  UserCircleIcon,
  UserIcon,
  LogoutIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import imgLogo from "/public/images/50x80.png";
import { ActiveLink } from "./ActiveLink/ActiveLink";
// import { SubMenuLink } from "./SubMenuLink/SubMenuLink";
// import { useLogoutMutation } from "generated/graphql";
import { useRouter } from "next/router";
// import Cookies from "js-cookie";

export const Navbar: React.FC = ({}) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-row items-center shadow-lg p-2">
      <div className="w-6/12 sm:w-1/12 flex flex-row items-center p-0 sm:px-8">
        <Image src={imgLogo} alt="CLIPNOTES" />
      </div>
      <div className="w-6/12 flex flex-row gap-2 mx-4 text-sm">
        <ActiveLink href="/">Articles</ActiveLink>
        <ActiveLink href="/repositories">Repositories</ActiveLink>
      </div>
    </div>
  );
};
