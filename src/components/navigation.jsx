import React from "react";
import { useEffect } from "react";

export const Navigation = (props) => {
/*   useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("menu");
      const header = document.getElementById('header');

      if (header.focused) {
        navbar.classList.add("navbar-hidden");
        navbar.style.backgroundColor = "transparent";
      } else {
        navbar.classList.remove("navbar-hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); */

  useEffect(() => {
    const navbar = document.getElementById('menu');
    const header = document.getElementById('header');

      navbar.classList.add('no-transition');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 如果 entry.isIntersecting 為 true，表示 header 進入了視窗
          if (entry.isIntersecting) {
            // 在 header 區塊內，隱藏 navbar
            navbar.classList.add('navbar-hidden');
          } else {
            // 離開 header 區塊，顯示 navbar
            navbar.classList.remove('navbar-hidden');
          }
        });
        setTimeout(() => {
          navbar.classList.remove('no-transition');
        }, 50); // 稍微延遲一下，保證樣式已經應用

      },
      {
        rootMargin: '-50px 0px 0px 0px', // 向上偏移 50px，提前觸發
        threshold: 0.5 // 當 header 50% 進入或離開視窗時觸發
      }
    );

    // 開始觀察 header 元素
    observer.observe(header);

    // 清理函數：在元件卸載時停止觀察，避免記憶體洩漏
    return () => {
      observer.unobserve(header);
    };
  }, []); // 空陣列表示只在元件掛載時執行一次
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            ZLCSC
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                教學內容
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                關於資研
              </a>
            </li>
{/*             <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li> */}
            <li>
              <a href="#portfolio" className="page-scroll">
                最新資訊
              </a>
            </li>
{/*             <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll">
                團隊介紹
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                聯絡管道
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
