type ExperienceItem = {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  image: string;
};

type EducationItem = {
  title: string;
  period: string;
  description: string;
};

export const experienceData: ExperienceItem[] = [
  {
    id: "jysk-software-engineer",
    title: "JYSK - Software Engineer - Frontend",
    period: "2023 - nu",
    description:
      "I min nuværende rolle som frontend web-udvikler arbejder jeg med teknologier som React, Next.js App Router, TypeScript og TailwindCSS. Jeg er en del af et SCRUM-team bestående af syv udviklere, hvor mit primære fokus er udviklingen af JYSK's nye Headless frontend webshop løsning. Derudover har jeg ansvaret for at vedligeholde og videreudvikle en mindre applikation, som bl.a. muliggør planlægning af releases. På daglig basis arbejder jeg tæt sammen med vores Drupal CMS-team, samt UX-designere og QA-testere. Som en del af udviklingen af webshoppen har jeg bidraget til overgangen fra Next.js Pages Router til App Router, hvilket har gjort det muligt at udfase et tidligere GraphQL-mellemlag. Denne ændring har resulteret i en mere effektiv og moderne arkitektur.",
    technologies: ["React", "Next.js App Router", "TypeScript", "TailwindCSS"],
    image: "/JYSK_logo.png",
  },
  {
    id: "jysk-developer",
    title: "JYSK - Developer - Frontend",
    period: "2023",
    description:
      "Frontend Udvikler Arbejdede som frontend web-udvikler hvor jeg anvendte teknologier som React, Next.js Pages Router, TypeScript og TailwindCSS. I samarbejde med mit SCRUM-team arbejdede jeg med videreudvikling af nye features samt vedligholdelse af JYSK's webshop. På daglig basis arbejdede jeg tæt sammen med vores Drupal CMS-team, samt UX-designere og QA-testere. Som frontend team havde vi også ansvaret for en GraphQL applikation som optimerede datahåndteringen mellem frontenden og backenden.",
    technologies: [
      "React",
      "Next.js Pages Router",
      "TypeScript",
      "TailwindCSS",
      "GraphQL",
    ],
    image: "/JYSK_logo.png",
  },
  {
    id: "jysk-junior-developer",
    title: "JYSK - Junior Developer - Frontend",
    period: "2022",
    description:
      "Arbejdede som junior frontend-udvikler hvor jeg anvendte teknologier som React, TypeScript og CSS. I samarbejde med mit SCRUM-team arbejdede jeg med videreudvikling af nye features samt vedligholdelse af JYSK's webshop. Yderligere var en stor del af arbejdet, at modernisere teknologistakken ved at udskifte ældre teknologier, for at forbedre både brugeroplevelsen samt forbedre udvikler oplevelsen.",
    technologies: ["React", "TypeScript", "CSS"],
    image: "/JYSK_logo.png",
  },
  {
    id: "danske-bank-developer",
    title: "Danske Bank - Software Developer",
    period: "2021 - 2022",
    description:
      "Arbejdede som software udvikler som en del af et SCRUM- team på ti mand, hvor vi udviklede investeringsløsninger til Danske Banks kunder. Her har jeg hovedsageligt stået for frontend-udviklingen som har foregået i React, TypeScript og CSS.",
    technologies: ["React", "TypeScript", "CSS"],
    image: "/danskebank.png",
  },
  {
    id: "danske-bank-intern",
    title: "Danske Bank - Software Developer Intern",
    period: "2020",
    description:
      "Startede som praktikant som en del af et SCRUM-team på ti mand, hvor vi udviklede investeringsløsninger til Danske Banks kunder. Her har jeg hovedsageligt stået for frontend- udviklingen som har foregået i React, TypeScript og CSS.",
    technologies: ["React", "TypeScript", "CSS"],
    image: "/danskebank.png",
  },
];

export const educationData: EducationItem = {
  title: "Diplomingeniør i softwareteknologi",
  period: "2021 - 2024",
  description:
    "Uddannelsen som Diplomingeniør i softwareteknologi er en universitetsuddannelse på 3,5 år inklusiv et halvt års praktik. Uddannelsen giver en bred viden inden for programmering, systemudvikling og databaser. Gennem uddannelsen har jeg arbejdet med forskellige programmeringssprog og teknologier",
};
