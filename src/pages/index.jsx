import React from 'react';
import { navigate, withPrefix } from 'gatsby';
import { useTranslation } from 'react-i18next';

const RedirectPage = () => {
  if (typeof window !== 'undefined') {
    const { i18n } = useTranslation();
    const userLang = i18n.language;
    const homeUrl = withPrefix(`/${userLang}/`);

    navigate(homeUrl);
  }

  return <div />;
};

export default RedirectPage;
