import { Card, Badge } from "flowbite-react";
import { IEducation } from "@/models/education";

type Props = {
  institute: IEducation;
};

export default function InstituteInfo(props: Props) {
  const { name, degree, from, to, place, description } = props.institute;
  return (
    <Card className="institute-info">
      <h5 className="text-sm md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
        <span className="text-xs md:text-sm mx-2">{place}</span>
      </h5>
      <div className="flex gap-2">
        <Badge color="success" className="text-xs md:text-md">
          From: {from}
        </Badge>
        <Badge color="failure" className="text-xs md:text-md">
          To: {to}
        </Badge>
      </div>
      <div>
        Qualification:{" "}
        <Badge color="indigo" className="inline-block text-xs md:text-md">
          {degree}
        </Badge>
      </div>
    </Card>
  );
}
