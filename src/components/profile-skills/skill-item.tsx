"use client";
import { Skill } from "@/models/skill";
// import { Rating } from "@aws-amplify/ui-react";
import { Rating, RatingStar, Badge } from "flowbite-react";

type Props = {
  skill: Skill;
};

export default function SkillItem(props: Props) {
  const { name } = props.skill;
  return (
    <div className="skill-item m-1">
      {/* {icon && <div className="icon text-center w-full">{icon}</div>} */}
      {/* <div className="text-center text-xs">{name}</div>
      <div className="rating">
        {rating}/5{" "}
        <Rating>
          <RatingStar />
        </Rating>
      </div> */}
      <Badge className="font-bold">{`#${name}`}</Badge>
    </div>
  );
}
