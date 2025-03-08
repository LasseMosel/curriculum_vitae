"use client";

import Header from "@/components/header/header";
import MenuBar from "@/components/menu-bar";
import { Tabs } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Header />
      <Tabs defaultValue="experience" className="w-full">
        <MenuBar />
      </Tabs>
    </div>
  );
}
