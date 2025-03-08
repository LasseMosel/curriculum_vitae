"use client";

import Tooltips from "@/components/header/tooltips";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 gap-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <Avatar className="h-24 w-24 border-4 border-primary">
          <AvatarImage
            src="/lasse.jpg"
            alt="Profile picture"
            className="object-cover"
          />
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold uppercase">Lasse Bjørn Mosel</h1>
          <p className="text-xl text-muted-foreground uppercase">
            Frontend Software Engineer
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            <Tooltips text="Location">
              <MapPin className="h-3 w-3" />
              Aarhus, Danmark
            </Tooltips>

            <Tooltips text="Email Address">
              <Mail className="h-3 w-3" />
              lassebjoernmosel@gmail.com
            </Tooltips>

            <Tooltips text="Phone Number">
              <Phone className="h-3 w-3" />
              +45 29 21 78 99
            </Tooltips>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-row items-center gap-2">
        <a
          href="https://www.linkedin.com/in/lassebmosel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="mr-2 h-4 w-4" />
        </a>

        <Button>
          <a
            href="/lassebjoernmoselcv.pdf"
            download
            className="flex flex-row items-center gap-2"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </Button>
      </div>
    </header>
  );
}
