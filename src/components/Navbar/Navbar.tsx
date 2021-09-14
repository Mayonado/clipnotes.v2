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
      <div className="w-1/12 flex flex-row items-center px-8">
        <Image src={imgLogo} alt="CLIPNOTES" />
      </div>
      <div className="w-8/12 flex flex-row gap-2 mx-4 text-sm">
        <ActiveLink href="/articles">Articles</ActiveLink>
        <ActiveLink href="/repositories">Repositories</ActiveLink>
      </div>
      <div className="w-3/12 flex flex-row justify-end px-8">
        <Menu as="div" className="relative inline-block text-left">
          {/* <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-gray-600">
            Lizandro Mayonado
            <UserCircleIcon className="w-6 ml-2 -mr-1" aria-hidden="true" />
          </Menu.Button> */}
        </Menu>
      </div>
    </div>
  );
};
