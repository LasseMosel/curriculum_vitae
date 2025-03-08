import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TabsContent } from "@/components/ui/tabs";

export default function SkillsTab() {
  return (
    <TabsContent value="skills" className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Færdigheder</h2>
      <div className="mx-20">
        <Card className="mb-4">
          <CardContent className="space-y-4">
            {[
              { name: "React", level: 90 },
              { name: "Next.js", level: 75 },
              { name: "TypeScript", level: 85 },
              { name: "Tailwind CSS", level: 95 },
              { name: "CSS", level: 85 },
              { name: "JavaScript", level: 85 },
              { name: "Git", level: 75 },
            ].map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2">
          {["Hold spiller", "Kommunikation ", "Agile/Scrum", "Buddy"].map(
            (skill) => (
              <Badge key={skill} className="bg-muted text-muted-foreground">
                {skill}
              </Badge>
            )
          )}
        </div>
      </div>
    </TabsContent>
  );
}
