import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function ServiceDetailsPage() {
  pageTitle('進行方式');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='進行方式'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='研究進行方式'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='進行、學習方式' 
          subtitle='通過網頁設計進入電腦科技的世界' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='初階練功'
              subtitle='在這個階段主要學習HTML、CSS、JavaScript等程式技術，培養紮實的技術實力，也為接下來的學習奠定基礎'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='中階鍛鍊'
              subtitle='熟悉網頁前端設計後，我們會進行分組，讓社員根據自己的興趣選擇網頁設計進階、遊戲設計與伺服器後端設計的專業項目，通過分組專題精進自己的技術實力，也能將在資研社所學習的知識製作成學習歷程檔案'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='進階探索'
              subtitle='最後我們會嘗試整合三大組別，做出屬於自己的全端網站，在這個過程中，也能通過實務經驗接觸到資訊安全、數據傳遞、演算法等進階知識'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='問與答' 
                subtitle='你可能會有疑問的地方'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      
      
      <Spacing lg='120' md='50'/>
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
