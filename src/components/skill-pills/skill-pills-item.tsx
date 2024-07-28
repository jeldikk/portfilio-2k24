import { Rating, RatingStar } from "flowbite-react";
import { Skill } from "../../models/skill";
type Props = {
  skill: Skill;
};

export default function SkillPillsItem(props: Props) {
  const { name, icon, rating } = props.skill;
  return (
    <div className="skill-pills-item text-center w-[80px]">
      <div className="logo flex justify-center">{icon}</div>
      <div className="name text-xs font-bold">{name}</div>
      <div className="rating text-sm flex justify-center gap-2">
        <label>{rating}</label>
        <Rating className="inline-block">
          <RatingStar />
        </Rating>
      </div>
    </div>
  );
}
