import "./App.css";
import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";
import { ThemeContextProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
        <div className="transition-colors duration-200 bg-[#F4F4F4] dark:bg-[#252128] text-gray-900 dark:text-gray-100">
          <HeaderSection />
          <SkillsSection />
          <ProfileSection />
          <ProjectSection />
          <FooterSection />
        </div>
      </LanguageProvider>
    </ThemeContextProvider>
  );
}

export default App;
