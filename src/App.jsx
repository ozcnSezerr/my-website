import { useState } from "react";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeaderSection />
      <SkillsSection />
      <ProfileSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
}

export default App;
