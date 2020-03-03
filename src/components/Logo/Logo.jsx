import React from 'react';

import LogoEN from '../../../content/assets/logo.en.inline.svg';
import LogoRu from '../../../content/assets/logo.ru.inline.svg';
import LogoBe from '../../../content/assets/logo.be.inline.svg';

const logoMapper = {
  en: <LogoEN className="logo" />,
  ru: <LogoRu className="logo" />,
  be: <LogoBe className="logo" />,
};

const Logo = ({ contentLang }) => {
  return logoMapper[contentLang];
};

export default Logo;
