import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useTranslation } from 'react-i18next';

const Link = ({ to, ...rest }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const prefixedPath = `/${language}${to}`;

  // eslint-disable-next-line
  return <GatsbyLink to={language ? prefixedPath : to} {...rest} />;
};

export default Link;
