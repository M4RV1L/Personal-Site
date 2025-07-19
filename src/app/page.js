import Image from "next/image";
import HeroSection from "./compnents/HeroSection";
import NavBar from "./compnents/NavBar";
import AboutSection from "./compnents/AboutSection";
import { ProjectCard } from "./compnents/ProjectCard";
import ProjectsSection from "./compnents/ProjectsSection";
import Footer from "./compnents/Footer";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-black">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
        </div>
      <Footer />
      </main>
  );
}
