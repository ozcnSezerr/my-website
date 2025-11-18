import { useState } from "react";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeaderSection />
      <SkillsSection />
      <ProfileSection />
    </div>
  );
}

export default App;
