import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "Domine": "Graphic Designer",
      "presentation": "Hi there! My name is Farid Drarez and I'm a 25-year-old graphic designer based in Morocco. I have always been passionate about visual art and design, which led me to pursue a career in graphic design. I specialize in creating eye-catching and effective designs for various mediums such as print, web, and social media.",
      "cv": "Download Cv",
      "services": "What I Do",
    }
  },
  fr: {
    translation: {
      "Domine": "Infographie",
      "presentation": "Je suis spécialisé dans la conception des graphistes . J'ai développé mon activité depuis 2019, J’ai toujours été passionné par les arts visuels et le design. Je suis à votre écoute pour vous conseiller et vous orienter au mieux vers des solutions adaptées à votre profession et à vos besoins. Nous pouvons nous rencontrer pour discuter de vos projets.",
      "cv": "Télécharger Mon Cv",
      "services": "Services"
    }
  }
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
