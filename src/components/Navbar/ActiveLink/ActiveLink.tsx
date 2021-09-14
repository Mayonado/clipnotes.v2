import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { classNames } from "utils";

interface ActiveLinkProps {
  href: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const route = useRouter();
  const classes = classNames(
    "py-2 px-4 rounded",
    route.pathname === href
      ? "bg-indigo-500 text-white"
      : "hover:text-indigo-500"
  );
  return (
    <Link href={href} {...props} passHref>
      <button className={classes}>{children}</button>
    </Link>
  );
};
