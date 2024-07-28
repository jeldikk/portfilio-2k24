import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0">
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Hi, iamkamal
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} href="/contact">
            Contact Me
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
