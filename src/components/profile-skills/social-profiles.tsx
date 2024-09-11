import { createElement, ReactNode } from "react";
import { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaRegKeyboard } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const withCustomisation = (component: IconType) => {
  return createElement(component, {
    className: "text-3xl md:text-4xl",
  });
};

const SOCIAL_PROFILES = [
  {
    href: "https://www.linkedin.com/in/kamal-kumar-jeldi-7259b5203/",
    name: "LinkedIn",
    icon: withCustomisation(FaLinkedin),
  },
  {
    href: "https://github.com/jeldikk",
    name: "Github",
    icon: withCustomisation(FaGithub),
  },
  {
    href: "https://data.typeracer.com/pit/profile?user=jeldikk",
    name: "Typeracer",
    icon: withCustomisation(FaRegKeyboard),
  },
  {
    href: "https://www.naukri.com/mnjuser/profile",
    name: "Udemy",
    icon: withCustomisation(SiUdemy),
  },
];

export function SocialProfilesList() {
  return (
    <div className="social-profiles flex flex-row flex-wrap justify-around pb-4 px-2">
      {SOCIAL_PROFILES.map((item) => (
        <SocialProfileItem name={item.name} icon={item.icon} href={item.href} />
      ))}
    </div>
  );
}

type SocialItemProps = {
  href: string;
  name: string;
  icon: ReactNode;
};

export function SocialProfileItem(itemProps: SocialItemProps) {
  const { name, icon, href } = itemProps;
  return (
    <div className="social-profile-item w-[80px] text-center">
      <a target="_blank" href={href} rel="noopener noreferrer">
        <div className="logo flex justify-center">{icon}</div>
        <div className="name text-xs">{name}</div>
      </a>
    </div>
  );
}
