import { IEducation } from "@/models/education";
import { Card } from "flowbite-react";
import InstituteInfo from "./institute-info";

const EDUCATION_DETAILS: IEducation[] = [
  {
    name: "Indian Institute of Space Science & Technology (IIST)",
    degree: "B.Tech, Avionics",
    from: "August, 2009",
    to: "August, 2013",
    place: "Valiamala, Trivandrum",
    description:
      "Studied DBMS, Wireless Mesh Networks, Computer Graphics, Instrumentation",
  },
  {
    name: "Sri Chaitanya Raman Bhavan Campus",
    degree: "Intermediate( 2 years )",
    from: "April, 2007",
    to: "May, 2009",
    place: "Vijayawada",
    description: "Studied Maths, Physics, Chemistry",
  },
];

export default function EducationPanel() {
  return (
    <div className="education-panel my-2">
      <Card>
        <h2 className="text-lg md:text-2xl font-bold tracking-tight">
          Education Details
        </h2>
        {EDUCATION_DETAILS.map((education) => (
          <InstituteInfo key={education.name} institute={education} />
        ))}
      </Card>
    </div>
  );
}
