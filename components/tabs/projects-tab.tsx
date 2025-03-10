import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { projectsData } from "@/data/projects";
import Image from "next/image";

export default function ProjectsTab() {
  return (
    <TabsContent value="projects" className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Projekter</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              width={400}
              height={200}
              src={project.image ?? "/placeholder.png"}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{project.content}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} className="bg-primary/10 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
}
