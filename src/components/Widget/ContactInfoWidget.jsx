import React from 'react';
import { Icon } from '@iconify/react';
import siteData from '../../data/siteData';

export default function ContactInfoWidget({ withIcon, title }) {
  const { contact } = siteData;
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ''
          )}
          {contact.phone}
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:envelope" />
            </span>
          ) : (
            ''
          )}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:map-marker" />
            </span>
          ) : (
            ''
          )}
          {contact.address} <br />
          {contact.addressDetail}
        </li>
      </ul>
    </>
  );
}
