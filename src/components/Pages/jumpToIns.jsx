import React, { useEffect } from 'react';
import siteData from '../../data/siteData';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import { pageTitle } from '../../helper';

export default function JumpToIns() {
  pageTitle('正在跳轉');

  useEffect(() => {
    const redirectToURL = siteData.contact.instagram;
    window.location.href = redirectToURL;
  }, []);

  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg cs-error_page"
      style={{ backgroundImage: 'url("/images/about_hero_bg.jpeg")' }}
    >
      <Div className="container">
        <SectionHeading
          title="正在跳轉"
          subtitle="為您重新導向"
          btnText="回到首頁"
          btnLink="/"
          variant="cs-style1 text-center"
        />
      </Div>
    </Div>
  );
}
