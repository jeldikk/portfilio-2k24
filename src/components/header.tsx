"use client";

import {
  AuthDetailsContext,
  type IAuthDetailsContextType,
} from "@/context/auth.context";
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
  const { authDetails, signOut } = useContext(
    AuthDetailsContext
  ) as IAuthDetailsContextType;
  console.log({ authDetails });
  return (
    <header className="sticky top-0 bg-current">
      <Navbar fluid>
        <NavbarBrand as={Link} href="/">
          <Image
            className="rounded-full"
            width={30}
            height={30}
            src={"/images/cartoon-pic.jpg"}
            alt="jeldikk brand pic"
            sizes=""
          />
          <span className="self-center whitespace-nowrap text-xl dark:text-white">
            Hi, I&apos;m kamal
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} href="/contact">
            Contact Me
          </NavbarLink>
          {authDetails?.isAuthenticated ? (
            <>
              <NavbarLink as={Link} href="/admin/dashboard">
                Dashboard
              </NavbarLink>
              <NavbarLink as={Link} href="#" onClick={() => signOut()}>
                Logout
              </NavbarLink>
            </>
          ) : (
            <NavbarLink as={Link} href="/auth/login">
              Login
            </NavbarLink>
          )}
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
