import ExperienceTab from "@/components/tabs/experience-tab";
import ProjectsTab from "@/components/tabs/projects-tab";
import SkillsTab from "@/components/tabs/skills-tab";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MenuBar() {
  return (
    <div>
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger className="w-full" value="experience">
          Erfaring
        </TabsTrigger>
        <TabsTrigger className="w-full" value="skills">
          Færdigheder
        </TabsTrigger>
        <TabsTrigger className="w-full" value="projects">
          Projekter
        </TabsTrigger>
      </TabsList>

      <ExperienceTab />
      <SkillsTab />
      <ProjectsTab />
    </div>
  );
}
