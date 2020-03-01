import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import glossaryEN from '../../content/glossary/en.json';
import glossaryRU from '../../content/glossary/ru.json';
import glossaryBE from '../../content/glossary/be.json';

const resources = {
  en: { translation: glossaryEN },
  ru: { translation: glossaryRU },
  be: { translation: glossaryBE },
};

i18n.on('initialized', () => {
  const actualLang = window.location.pathname.split('/')[1];

  i18n.changeLanguage(actualLang);
});

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',

    keySeparator: false,
  });

export default i18n;
