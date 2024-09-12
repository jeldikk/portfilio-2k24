import { Skill } from "@/models/skill";
import { Carousel } from "flowbite-react";
import {
  FaReact,
  FaAngular,
  FaBootstrap,
  FaNodeJs,
  FaDocker,
  FaSass,
} from "react-icons/fa";
import SkillList from "../profile-skills/skill-list";
import SkillPillsList from "./skill-pills-list";
import { FaHtml5 } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAwsamplify,
  SiExpress,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiPython,
  SiRabbitmq,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { createElement } from "react";
import { IconType } from "react-icons";

const withCustomisation = (component: IconType) => {
  return createElement(component, {
    className: "text-3xl md:text-4xl",
  });
};

const FRONTEND_STACK: Skill[] = [
  {
    name: "React",
    rating: 3.5,
    icon: withCustomisation(FaReact),
  },
  {
    name: "Angular",
    rating: 3,
    icon: withCustomisation(FaAngular),
  },
  {
    name: "Bootstrap",
    rating: 4,
    icon: withCustomisation(FaBootstrap),
  },
  {
    name: "Next JS",
    rating: 3.5,
    icon: withCustomisation(RiNextjsFill),
  },
  {
    name: "Tailwind CSS",
    rating: 3,
    icon: withCustomisation(RiTailwindCssFill),
  },
  {
    name: "Sass",
    rating: 4,
    icon: withCustomisation(FaSass),
  },
];

const BACKEND_STACK: Skill[] = [
  {
    name: "Node Js",
    rating: 4,
    icon: withCustomisation(FaNodeJs),
  },
  {
    name: "Typescript",
    rating: 3.5,
    icon: withCustomisation(SiTypescript),
  },
  {
    name: "Express",
    rating: 3.5,
    icon: withCustomisation(SiExpress),
  },
  {
    name: "Mongo DB",
    rating: 3.5,
    icon: withCustomisation(SiMongodb),
  },
  {
    name: "Python",
    rating: 2.5,
    icon: withCustomisation(SiPython),
  },
  {
    name: "MySQL",
    rating: 2.5,
    icon: withCustomisation(DiMysql),
  },
];

const MISC_STACK: Skill[] = [
  {
    name: "AWS Amplify",
    rating: 1,
    icon: withCustomisation(SiAwsamplify),
  },
  {
    name: "Docker",
    rating: 2,
    icon: withCustomisation(FaDocker),
  },
  {
    name: "Kubernetes",
    rating: 1,
    icon: withCustomisation(SiKubernetes),
  },
  {
    name: "Redis",
    rating: 2,
    icon: withCustomisation(SiRedis),
  },
  {
    name: "Rabbit MQ",
    rating: 2,
    icon: withCustomisation(SiRabbitmq),
  },
  {
    name: "GraphQL",
    rating: 2,
    icon: withCustomisation(SiGraphql),
  },
];

export default function SkillsCarousel() {
  return (
    <div className="skills-carousel">
      <Carousel
        className="h-[200px]"
        leftControl={""}
        rightControl={""}
        indicators={false}
        pauseOnHover
        slideInterval={5000}
      >
        <div>
          <h1 className="text-xl text-center font-extralight py-2">
            Frontend Stack
          </h1>
          <div className="px-9">
            <SkillPillsList list={FRONTEND_STACK} />
          </div>
        </div>
        <div>
          <h1 className="text-xl text-center font-extralight py-2">
            Backend Stack
          </h1>
          <div className="px-9">
            <SkillPillsList list={BACKEND_STACK} />
          </div>
        </div>
        <div>
          <h1 className="text-xl text-center font-extralight py-2">
            Miscellaneous
          </h1>
          <div className="px-9">
            <SkillPillsList list={MISC_STACK} />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
