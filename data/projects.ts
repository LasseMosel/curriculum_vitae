type ProjectItem = {
  image?: string;
  title: string;
  description: string;
  content: string;
  technologies: string[];
};

export const projectsData: ProjectItem[] = [
  {
    image: "/doodl_web.png",
    title: "Doodl",
    description: "Doodl er et klassisk tegn og gæt spil",
    content:
      "Doodl er et klassisk tegn og gæt spil, hvor man skal gætte det ord, som er tegnet af en anden spiller. Spillet er udviklet i React, Next.js, Tailwind CSS og TypeScript. Frontend er hostet på Vercel og Backenden er hostet på Heruko. Spillet indeholder oprettelse af private lobbyer, scoreboard, vælg af ord.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "Canvas",
      "SocketIo",
    ],
  },
  {
    title: "Affiliate Marketing hjemmesider",
    description:
      "Hjemmesider til at henvise folk til en virksomheds produkter og tjenester",
    content:
      "Viser en eller flere virksomheders produkter eller tjenester, og henviser kunden til virksomhedernes hjemmesider for en procentdel af efterfølgende salg.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Netlify"],
  },
  {
    image: "/teammate_logo.png",
    title: "Teammate Desktop application",
    description: "Nem måde at kommunikere med dine kollegaer",
    content:
      "Informationssystem til at kommunikere med dine kollegaer, send og modtag vigtige beskeder",
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Electron",
      "Firebase",
    ],
  },
];
