"use client";

import Header from "@/components/header/header";
import ExperienceTab from "@/components/tabs/experience-tab";
import ProjectsTab from "@/components/tabs/projects-tab";
import SkillsTab from "@/components/tabs/skills-tab";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Header />
      <Tabs defaultValue="experience" className="w-full">
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
      </Tabs>
    </div>
  );
}
