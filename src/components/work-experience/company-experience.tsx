import { IExperience } from "@/models/experience";
import { Card, Badge, List, ListItem } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";

type Props = {
  experience: IExperience;
};

export default function CompanyExperience(props: Props) {
  const { companyName, place, from, to, details, role } = props.experience;
  return (
    <Card className="company-experience bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {companyName}
        <span className="text-sm mx-2">{place}</span>
      </h5>
      <div className="flex gap-2">
        <Badge color="success">From: {from}</Badge>
        <Badge color="failure">To: {to}</Badge>
      </div>
      <div>
        Role:{" "}
        <Badge color="indigo" className="inline-block text-md">
          {role}
        </Badge>
      </div>
      <div className="text-sm font-normal text-stone-100">
        <List>
          {details.map((detail) => (
            <ListItem
              className="text-sm text-orange-200"
              icon={HiCheckCircle}
              key={detail}
            >
              {detail}
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  );
}
