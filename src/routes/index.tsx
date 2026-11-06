import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { About } from "@/components/site/about";
import { Certificates } from "@/components/site/certificates";
import { Contact } from "@/components/site/contact";
import { Experience } from "@/components/site/experience";
import { Focus } from "@/components/site/focus";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Projects } from "@/components/site/projects";
import { Skills } from "@/components/site/skills";
import { Stats } from "@/components/site/stats";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Focus />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" />
    </>
  );
}
