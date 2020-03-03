import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Logo from '../Logo';

const PortalDescription = ({ children, contentLang }) => {
  return (
    <div className="bg-box">
      <div className="content-wrap">
        <section className="portal-description">
          <Row>
            <Col className="portal-description__logo" lg>
              <Logo contentLang={contentLang} />
            </Col>
            <Col className="portal-description__info">{children}</Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default PortalDescription;
