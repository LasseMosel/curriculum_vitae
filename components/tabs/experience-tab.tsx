import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { educationData, experienceData } from "@/data/experience";
import Image from "next/image";

export default function ExperienceTab() {
  return (
    <TabsContent value="experience" className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Erfaring</h2>
      <Accordion type="single" collapsible className="w-full">
        {experienceData.map((experience) => (
          <AccordionItem key={experience.id} value={experience.id}>
            <AccordionTrigger>
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    width={100}
                    height={100}
                    src={experience.image}
                    alt="Company Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div className="font-semibold">{experience.title}</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {experience.period}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="pl-6 space-y-4 py-4 pr-8">
                <p>{experience.description}</p>
                {experience.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <h2 className="text-2xl font-bold mb-4 text-center">Uddannelse</h2>
      <Card>
        <CardHeader>
          <CardTitle>{educationData.title}</CardTitle>
          <CardDescription>{educationData.period}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{educationData.description}</p>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
