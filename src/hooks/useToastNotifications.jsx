import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useDarkMode } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export const useToastNotifications = () => {
  const { isDark } = useDarkMode();
  const { language } = useLanguage();

  const isMounted = useRef(false);

  // theme
  useEffect(() => {
    if (isMounted.current) {
      const message = isDark
        ? language === "tr"
          ? "Karanlık Mod 🌙"
          : "Dark Mode 🌙"
        : language === "tr"
        ? "Aydınlık Mod ☀️"
        : "Light Mode ☀️";

      toast.info(message, {
        position: "top-left",
        autoClose: 1200,
        theme: isDark ? "dark" : "light",
        style: {
          width: "fit-content",
        },
      });
    }
  }, [isDark]);

  //language
  useEffect(() => {
    if (isMounted.current) {
      const message =
        language === "tr"
          ? "Dil Değiştirildi: Türkçe"
          : "Language Changed: English";

      toast.info(message, {
        position: "top-left",
        autoClose: 1200,
        theme: isDark ? "dark" : "light",
        style: {
          width: "fit-content",
        },
      });
    } else {
      isMounted.current = true;
    }
  }, [language]);
};
