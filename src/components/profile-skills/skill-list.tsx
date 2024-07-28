import { Skill } from "@/models/skill";
import SkillItem from "./skill-item";
import {
  FaReact,
  FaAngular,
  FaJs,
  FaHtml5,
  FaCss3,
  FaPython,
} from "react-icons/fa";

const SKILLS: Skill[] = [
  {
    name: "React",
    icon: <FaReact className="text-6xl" />,
    rating: 4,
  },
  {
    name: "Angular",
    icon: <FaAngular className="text-6xl" />,
    rating: 3,
  },
  {
    name: "express",
  },
  {
    name: "mongo",
  },
  {
    name: "HTML & CSS",
  },
  {
    name: "bootstrap-css"
  },
  {
    name: "tailwind-css"
  },
  {
    name: "Sass"
  },
  {
    name: "Playwright",
  },
  {
    name: "UI/UX",
  },
  {
    name: "artillery.io",
  },
  {
    name: "API Development",
  },
  {
    name: "Javascript",
  },
  {
    name: "Python",
  },
  {
    name: "loopback framework",
  },
  {
    name: "web-components",
  },
  {
    name: "SQL",
  },
  {
    name: "d3js",
  },
  {
    name: "frontend",
  },
  {
    name: "jamstack",
  },
  {
    name: "fullstack",
  },
  {
    name: "Nextjs",
  },
  {
    name: "aws/amplify",
  },
  {
    name: "typescript"
  }
];

type Props = {
  skills: Skill[];
};

export default function SkillList(props: Props) {
  const { skills } = props;

  return (
    <div className="skill-list flex gap-1 flex-wrap p-2">
      {SKILLS.map((skill, idx) => (
        <SkillItem key={idx} skill={skill} />
      ))}
    </div>
  );
}
