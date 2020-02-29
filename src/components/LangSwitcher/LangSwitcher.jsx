import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import { navigate } from 'gatsby';

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleLangChange = (event) => {
    const newLang = event.target.value;
    const pageURL = window.location.pathname
      .split('/')
      .slice(2)
      .join('/');

    // FIXME: try to redirect by using gatsby-plugin-i18next (correct version)
    i18n.changeLanguage(newLang);
    navigate(`/${newLang}/${pageURL}`);
  };

  // FIXME: get langs list from siteMetadata
  return (
    <Form className="select-language">
      <Form.Group className="mb-0">
        <Form.Control as="select" value={currentLang} onChange={handleLangChange}>
          <option value="en">{t('en')}</option>
          <option value="ru">{t('ru')}</option>
          <option value="be">{t('be')}</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default LangSwitcher;
