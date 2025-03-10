import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TabsContent } from "@/components/ui/tabs";

export default function SkillsTab() {
  const technologiSkills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 75 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "CSS", level: 85 },
  ];

  const softSkills = [
    { name: "Hold spiller", level: 90 },
    { name: "Kommunikation ", level: 75 },
    { name: "Agile/Scrum", level: 85 },
    { name: "Buddy", level: 95 },
  ];

  return (
    <TabsContent value="skills" className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Færdigheder</h2>
      <div className="md:mx-20">
        <Card className="mb-4">
          <CardContent className="space-y-4">
            {technologiSkills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <Badge key={skill.name} className="bg-muted text-gray-500">
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </TabsContent>
  );
}
