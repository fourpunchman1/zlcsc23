import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';
import siteData from '../../data/siteData';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src={siteData.logo} alt={siteData.logoAlt} />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li>
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        首頁
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        關於
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/team"
                        onClick={() => setMobileToggle(false)}
                      >
                        團隊
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="/service"
                        onClick={() => setMobileToggle(false)}
                      >
                        研究方向
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/service"
                              onClick={() => setMobileToggle(false)}
                            >
                              研究方向
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service/serviceDetails"
                              onClick={() => setMobileToggle(false)}
                            >
                              研究進行方式
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src={siteData.logo} alt={siteData.logoAlt} />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              有任何疑問嗎？ <br /> 歡迎聯絡我們
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="聯絡方式" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="持續關注"
              subtitle="此功能測試中，聯繫、關注請洽官方INSTGRAM帳號"
              placeholder="您的電子郵件"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
