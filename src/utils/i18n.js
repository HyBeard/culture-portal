import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import glossaryEN from '../../content/glossary/en.json';
import glossaryRU from '../../content/glossary/ru.json';
import glossaryBE from '../../content/glossary/be.json';

// the translations
const resources = {
  en: { translation: glossaryEN },
  ru: { translation: glossaryRU },
  be: { translation: glossaryBE },
};

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
