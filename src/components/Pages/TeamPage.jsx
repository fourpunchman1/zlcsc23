import React, { useEffect } from 'react';
import siteData from '../../data/siteData';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';

export default function TeamPage() {
  pageTitle('團隊');
  const teamData = siteData.team;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="團隊"
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText="團隊"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="中崙資研幹部"
          subtitle="第 23 屆幹部團隊"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title="加入資研社 <br />攜手實現我們的創意想法"
            btnText="聯絡我們"
            btnLink="/jumpToIns"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
