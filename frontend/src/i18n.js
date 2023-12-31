import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    resources: {
      en: {
        translation: require('./public/locales/en.json'),
      },
      fr: {
        translation: require('./public/locales/fr.json'),
      },
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
  });

export default i18n;
