import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import { navigate } from 'gatsby';

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleLangChange = (event) => {
    const newLang = event.target.value;
    const noPrefixedPath = window.location.pathname
      .split('/')
      .slice(2)
      .join('/');

    i18n.changeLanguage(newLang);
    navigate(`/${newLang}/${noPrefixedPath}`, { replace: true });
  };

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
