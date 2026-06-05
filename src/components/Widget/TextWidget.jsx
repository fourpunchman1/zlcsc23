import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';

export default function TextWidget({ logoSrc, logoAlt, text }) {
  return (
    <Div className="cs-text_widget">
      <Link to="/">
        <img src={logoSrc} alt={logoAlt} />
      </Link>
      {text ? <p>{text}</p> : null}
    </Div>
  );
}
