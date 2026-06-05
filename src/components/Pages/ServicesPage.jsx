import React, { useEffect } from 'react';
import siteData from '../../data/siteData';
import { pageTitle } from '../../helper';
import Card from '../Card';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';

export default function ServicesPage() {
  pageTitle('研究方向');
  const { servicesPage, tagline } = siteData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="研究方向"
        bgSrc="images/service_hero_bg.jpeg"
        pageLinkText="研究方向"
      />
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading title="研究方向" subtitle={tagline} />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                {servicesPage.map((service, index) => (
                  <React.Fragment key={service.title}>
                    {index > 0 && index % 2 === 1 && (
                      <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                    )}
                    <Div className="col-lg-3 col-sm-6">
                      <Card
                        title={service.title}
                        link={service.link}
                        src={service.src}
                        alt={service.title}
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

      <Spacing lg="125" md="55" />
      
      
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
