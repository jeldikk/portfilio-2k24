import EducationPanel from "./education/education-panel";
import WorkExperience from "./work-experience/work-experience";
import SkillPillsPanel from "./skill-pills/skill-pills-panel";
export default function RightPanel() {
  return (
    <div className="right-panel rounded-md">
      <SkillPillsPanel />
      <WorkExperience />
      <EducationPanel />
    </div>
  );
}
