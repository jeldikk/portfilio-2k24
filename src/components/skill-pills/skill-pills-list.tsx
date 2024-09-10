import SkillPillsItem from "./skill-pills-item";
import { Skill } from "../../models/skill";
import { FaNodeJs } from "react-icons/fa6";

const SKILL_IN_TOUCH: Skill[] = [
  {
    name: "Nodejs",
    rating: 3.5,
    icon: <FaNodeJs />,
  },
  {
    name: "HTML, CSS & JS",
    rating: 4,
    icon: "",
  },
  {
    name: "React",
    rating: 3.5,
    icon: "",
  },
  {
    name: "Angular",
    rating: 3.5,
    icon: "",
  },
];

type Props = {
  list: Skill[];
};

export default function SkillPillsList(props: Props) {
  const { list } = props;
  return (
    <div className="skill-pills-list flex justify-around flex-wrap gap-2 md:gap-0">
      {list.map((skill) => (
        <SkillPillsItem key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
