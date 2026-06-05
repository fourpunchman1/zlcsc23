import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'
import SocialWidget from '../Widget/SocialWidget'

export default function TeamDetails() {
  pageTitle('團隊成員');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Team Details'
        bgSrc='/images/team_hero_bg.jpeg'
        pageLinkText='Team Details'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/member_details_1.jpeg" alt="Member" className="w-100" />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg='0' md='45'/>
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">Melon Bulgery</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Product Designer</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">作為社長，我深感榮幸能夠領導這個充滿熱情和才華的團隊。中崙高中資訊研習社一直以來都是一個讓我們追求知識、挑戰極限並實現夢想的地方。我們致力於探索資訊科技的各個面向，不斷學習、成長，並在這個快速變化的世界中保持競爭力。</p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">作為社長，我深感榮幸能夠領導這個充滿熱情和才華的團隊。中崙高中資訊研習社一直以來都是一個讓我們追求知識、挑戰極限並實現夢想的地方。我們致力於探索資訊科技的各個面向，不斷學習、成長，並在這個快速變化的世界中保持競爭力。</p>
              <Div className="cs-height_45 cs-height_lg_30" />
              <SocialWidget/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='加入資研社 <br />攜手實現我們的創意想法' 
          btnText='聯絡我們' 
          btnLink='/jumpToIns' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
