import { IExperience } from "@/models/experience";
import { Badge, Card } from "flowbite-react";
import CompanyExperience from "./company-experience";

const EXPERIENCES: IExperience[] = [
  {
    companyName: "EdgeVerve Systems Ltd / An Infosys Company",
    place: "Hyderabad, India",
    from: "August 2023",
    to: "working till now ...",
    role: "Product Technical Lead",
    details: [
      "Served as a member of development team to one of their web transformed Treasury solution",
      "Worked on performing load analysis by applying different types of load to check the stability measures of the system using artillery.io framework",
      "Implemented a webpack based customisation framework for client side customisations, helping the implementation team to cater the needs of financial institutes.",
      "Demonstrated automations of popular Treasury deal operations using playwright framework to understand integrations of E2E library with web app.",
      "Implemented a signature bytes based pre-validation phase to fortify the security of application from malformed file uploads.",
      "Familiarize the IBM’s loopback framework, web component using google’s polymer CSR library.",
    ],
  },
  {
    companyName: "Mphasis Limited",
    place: "Bangalore, India",
    from: "March, 2021",
    to: "August, 2023",
    role: "Senior Software Engineer",
    details: [
      "Serving as a Senior UI Developer to one of their fintech clients for building highly scalable, robust and modular screens",
      "Responsible for modernizing their older screens with business compliant new designs and interactions",
      "Instrumental in developing Onboarding, Dashboard & Interactive Visualization Screens",
      "Able workforce who can develop less production error codes",
      "Involved in design of web API's with backend teams",
    ],
  },
  {
    companyName: "National Atmospheric Research Laboratory",
    place: "Gadanki, Tirupati",
    from: "December, 2014",
    to: "March, 2021",
    role: "Engineer - SD",
    details: [
      "Focal point for In-house development of Radar Controller Software for India's MST Radar using python",
      "Development of supporting & associated tools for experiments & health logging",
      "Design and Development of modules and dependency libraries for data extraction and processing workflows",
      "Participated in Tutoring Python for students and research scholars",
    ],
  },
  {
    companyName: "Semi Conductor Laboratory",
    place: "Mohali, India",
    from: "October, 2013",
    to: "November, 2014",
    role: "Engineeer - SC",
    details: [
      "Development of a web tool to visualize & track batch level and wafer level element failures from csv extract",
      "Member of a Mask Data Preparation and learnt a tool specific language in quick preparation of mask data used in lithography",
    ],
  },
];

export default function WorkExperience() {
  return (
    <div className="experience-list">
      <Card className="shadow">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">
          Work Experience
        </h2>
        {EXPERIENCES.map((exp) => (
          <CompanyExperience key={exp.companyName} experience={exp} />
        ))}
      </Card>
    </div>
  );
}
