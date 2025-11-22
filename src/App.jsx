import "./App.css";

import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";
import { ThemeContextProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToastNotifications } from "./hooks/useToastNotifications";

const MainLayout = () => {
  useToastNotifications();

  return (
    <div className="transition-colors duration-200 bg-[#F4F4F4] dark:bg-[#252128] text-gray-900 dark:text-gray-100">
      <ToastContainer />
      <HeaderSection />
      <SkillsSection />
      <ProfileSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
        <MainLayout />
      </LanguageProvider>
    </ThemeContextProvider>
  );
}

export default App;
