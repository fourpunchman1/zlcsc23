import React from 'react';
import { Icon } from '@iconify/react';
import siteData from '../../data/siteData';
import Div from '../Div';

export default function SocialWidget() {
  const { contact } = siteData;
  const links = [
    { href: contact.instagram, icon: 'fa6-brands:instagram', label: 'Instagram' },
    { href: contact.discord, icon: 'fa6-brands:discord', label: 'Discord' },
    { href: contact.github, icon: 'fa6-brands:github', label: 'GitHub' },
  ].filter((item) => item.href);

  return (
    <Div className="cs-social_btns cs-style1">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="cs-center"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <Icon icon={item.icon} />
        </a>
      ))}
    </Div>
  );
}
