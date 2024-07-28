import { Card, Badge } from "flowbite-react";
import { IEducation } from "@/models/education";

type Props = {
  institute: IEducation;
};

export default function InstituteInfo(props: Props) {
  const { name, degree, from, to, place, description } = props.institute;
  return (
    <Card className="institute-info">
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
        <span className="text-sm mx-2">{place}</span>
      </h5>
      <div className="flex gap-2">
        <Badge color="success">From: {from}</Badge>
        <Badge color="failure">To: {to}</Badge>
      </div>
      <div>
        Qualification:{" "}
        <Badge color="indigo" className="inline-block text-md">
          {degree}
        </Badge>
      </div>
    </Card>
  );
}
