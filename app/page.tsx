import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EngineeringSystems from "@/components/EngineeringSystems";
import Systems from "@/components/Systems";
import PersonalBrand from "@/components/PersonalBrand";
import CommunityWork from "@/components/CommunityWork";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <CursorFollower />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <EngineeringSystems />
      <Systems />
      <PersonalBrand />
      <CommunityWork />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
