import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import { Link } from 'react-router-dom'
import siteData from '../../data/siteData'
import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const logo = logoSrc || siteData.logo
  const alt = logoAlt || siteData.logoAlt
  const copyrightLinks = [
    {
      title: 'TOBYPHANT',
      href: '/'
    },
    {
      title: 'ALL RIGHTS RESERVED',
      href: '/'
    }
  ]
  
  const serviceMenu = [
    {
      title: 'HTML CSS JS 網頁設計',
      href: '/service'
    },
    {
      title: 'JavaScript 遊戲設計',
      href: '/service'
    },
    {
      title: 'NodeJS後端伺服器',
      href: '/service'
    },
    {
      title: '各式程式設計 科技新知',
      href: '/service'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Link to="/" className="cs-text_widget">
                  <img src={logo} alt={alt} />
                </Link>
                <MenuWidget menuItems={[{ title: '首頁', href: '/' }]} />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading='研究方向'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title='聯絡我們'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter 
                  title='持續關注' 
                  subtitle='此功能測試中，聯繫、關注請洽官方INSTGRAM帳號' 
                  placeholder='您的電子郵件'
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2025 中崙資研 ZLCSC-23</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
