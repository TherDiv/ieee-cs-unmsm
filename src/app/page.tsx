import Header from "../components/Header";
import Hero from "../sections/Hero";
import Benefits from "../sections/Benefits";
import TopBar from "@/components/Topbar";
import Collaborators from "../sections/Collaborators";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <AboutUs/>
      <Collaborators/>
      <Benefits/>
      <Contact/>
    </>
  );
}
