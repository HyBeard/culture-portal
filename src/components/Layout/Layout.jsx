import React from 'react';
import { withTranslation } from 'react-i18next';

import Link from '../Link';
import Header from '../Header';
import Navigation from '../Navigation';
import LangSwitcher from '../LangSwitcher';
import Footer from '../Footer';

const Layout = ({ children, t }) => {
  return (
    <>
      <Header>
        <Navigation className="header__nav">
          <Link to="/" as="h1">
            {t('logo')}
          </Link>
          <Link to="/search">{t('searchLink')}</Link>
          <Link to="/team">{t('teamLink')}</Link>
          <Link to="/worklog">{t('worklogTitle')}</Link>
        </Navigation>
        <LangSwitcher />
      </Header>
      <main className="main">{children}</main>
      <Footer>
        <p>® {t('footerDesc')} 2020</p>
      </Footer>
    </>
  );
};

export default withTranslation()(Layout);
