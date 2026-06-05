import React, { useEffect } from 'react';
import siteData from '../../data/siteData';
import Card from '../Card';
import Cta from '../Cta';
import Div from '../Div';
import Hero from '../Hero';
import TeamSlider from '../Slider/TeamSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import TimelineSlider from '../Slider/TimelineSlider';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import { pageTitle } from '../../helper';

export default function Home() {
  const { hero, researchAreas, tagline } = siteData;
  pageTitle('首頁');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        btnText={hero.btnText}
        btnLink={hero.btnLink}
        scrollDownId="#service"
        socialLinksHeading={hero.socialLinksHeading}
        heroSocialLinks={hero.heroSocialLinks}
        bgImageUrl={hero.bgImageUrl}
      />

      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="研究方向"
                subtitle="探索程式、網頁與資訊素養"
                btnText="了解更多"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {researchAreas.map((area, index) => (
                  <React.Fragment key={area.title}>
                    {index % 2 === 1 && (
                      <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                    )}
                    <Div className="col-lg-3 col-sm-6">
                      <Card
                        title={area.title}
                        link={area.link}
                        src={area.src}
                        alt={area.alt}
                      />
                      <Spacing lg="0" md="30" />
                    </Div>
                  </React.Fragment>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="教學計劃"
                subtitle={tagline}
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="社團幹部"
          subtitle="第 23 屆幹部團隊"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />


      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="加入資研社 <br />攜手實現我們的創意想法"
          btnText="聯絡我們"
          btnLink="/jumpToIns"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
