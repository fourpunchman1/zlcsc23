/**
 * 中崙資研第 23 屆官網內容（參考 zlcsc-webpage-sourcecode、ZLCSC-22）
 */
const baseUrl =
  process.env.PUBLIC_URL && process.env.PUBLIC_URL !== '.'
    ? process.env.PUBLIC_URL
    : '/zlcsc23';
const siteData = {
  siteName: "中崙資研",
  tagline: "創新求知，領航未來",
  logo: baseUrl + "/images/logo.jpg",
  logoAlt: "中崙資研社徽",
  hero: {
    title: "中崙資研",
    subtitle:
      "在台北市中崙高中，有一群熱愛資訊技術的人，我們每週在資訊研習社團聚，探索和學習各種資訊科技相關的知識。風氣開放，沒有學長姐制、沒有語言歧視，讓每位社員都能在這裡發揮他們的潛力，並在電子資訊領域中茁壯成長。",
    btnText: "了解更多",
    btnLink: "/about",
    bgImageUrl: baseUrl + "/images/hero_bg.jpeg",
    socialLinksHeading: "Follow Us",
    heroSocialLinks: [
      {
        name: "tobyphant",
        links: "https://instagram.com/tobyphant?igshid=OGQ5ZDc2ODk2ZA==",
      },
      {
        name: "zlcsc_23rd",
        links: "https://www.instagram.com/zlcsc_23rd",
      },
    ],
  },
  contact: {
    phone: "+886 ### ### ###",
    email: "zlcsc23rd@gmail.com",
    address: "105台北市松山區八德路四段101號",
    addressDetail: "電腦教室-三",
    github: "https://github.com/zlcsc23",
    instagram: "https://www.instagram.com/zlcsc_23rd",
    discord: "https://discord.gg/B5h8hySK7k",
    linktree: "",
  },
  about: {
  intro:
      "我們是中崙資訊研習社，致力於提供一個平台讓大家分享和學習最新的科技知識和技能。在台北市中崙高中，我們每週團聚，探索硬體、程式、網頁與資訊素養；風氣開放，沒有學長姐制、沒有語言歧視，讓每位社員都能在電子資訊領域中茁壯成長。",
    whyJoin:
      "與一般的電腦課程不同，我們強調實踐訓練，透過最新的網頁與程式技術輔助學習；並與外校社團、電子資訊社群交流合作，讓學習資訊程式更有趣，也認識志同道合的朋友。",
    emblem:
      "社徽以 glitch、賽博龐克風格呈現，融入大家對資訊領域的想像——在霓虹燈下，為資訊科技盡一份心力。",
  },
  researchAreas: [
    {
      title: "硬體概論",
      link: "/service/serviceDetails",
      src: baseUrl + "/images/service_1.jpeg",
      alt: "硬體概論",
    },
    {
      title: "C++ 與資料結構",
      link: "/service/serviceDetails",
      src: baseUrl + "/images/service_2.jpeg",
      alt: "程式設計",
    },
    {
      title: "網頁前後端開發",
      link: "/service/serviceDetails",
      src: baseUrl + "/images/service_3.jpeg",
      alt: "網頁開發",
    },
    {
      title: "社群演算法與資訊素養",
      link: "/service/serviceDetails",
      src: baseUrl + "/images/service_4.jpeg",
      alt: "資訊素養",
    },
  ],
  servicesPage: [
    { title: "硬體概論", link: "/service/serviceDetails", src: baseUrl + "/images/service_1.jpeg" },
    { title: "C++ 基礎與資料結構", link: "/service/serviceDetails", src: baseUrl + "/images/service_2.jpeg" },
    { title: "HTML CSS JS 網頁設計", link: "/service/serviceDetails", src: baseUrl + "/images/service_3.jpeg" },
    { title: "React 與 API 後端", link: "/service/serviceDetails", src: baseUrl + "/images/service_4.jpeg" },
    { title: "Python 小工具與爬蟲", link: "/service/serviceDetails", src: baseUrl + "/images/service_5.jpeg" },
    { title: "Arduino / ESP32 軟硬整合", link: "/service/serviceDetails", src: baseUrl + "/images/service_6.jpeg" },
  ],
  teachingPlan: [
    [
      {
        year: "上學期",
        name: "硬體與 C++ 基礎",
        position: "邏輯閘、二進制、基本語法",
        type: "程式在電腦中如何運作",
      },
      {
        year: "段考後",
        name: "資料結構與演算法",
        position: "排序、函式庫",
        type: "各式演算法入門",
      },
    ],
    [
      {
        year: "下學期",
        name: "網頁前後端",
        position: "HTML CSS JS、React、API",
        type: "全端網站開發",
      },
      {
        year: "學期末",
        name: "資安與多元分享",
        position: "網頁資安、業界演講",
        type: "專案與拓展視野",
      },
    ],
  ],
  team: [
    {
       memberImage: (process.env.PUBLIC_URL || '/zlcsc23') + "/images/team/01.jpg",
      memberName: "胡妘婕",
      memberDesignation: "社長／教學",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/02.jpg",
      memberName: "甄秉序",
      memberDesignation: "副社長／教學",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/03.jpg",
      memberName: "嚴宸鈞",
      memberDesignation: "公關／活動",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/04.jpg",
      memberName: "張桓嘉",
      memberDesignation: "公關／活動",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/05.jpg",
      memberName: "廖姸晴",
      memberDesignation: "美宣／教學",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/06.jpg",
      memberName: "楊蕎安",
      memberDesignation: "美宣",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/07.jpg",
      memberName: "陳湛方",
      memberDesignation: "教學",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/08.jpg",
      memberName: "林彥安",
      memberDesignation: "總務",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/09.jpg",
      memberName: "曾筠婷",
      memberDesignation: "文書",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/10.jpg",
      memberName: "詹翔宇",
      memberDesignation: "設備",
      memberSocial: {},
    },
    {
      memberImage: baseUrl + "/images/team/21.jpg",
      memberName: "陳仕庭",
      memberDesignation: "社團導師",
      memberSocial: {},
    },
  ],
  features: [
    {
      icon: "fa fa-code",
      title: "硬體概論",
      text: "介紹電腦內部架構、程式運作（邏輯閘與二進制等），以及直譯與編譯的差別。",
    },
    {
      icon: "fa fa-code-fork",
      title: "程式設計、資料結構與演算法",
      text: "教學 C++ 基本語法，段考後由排序方法入門資料結構與演算法，以及各種實用函式庫。",
    },
    {
      icon: "fa fa-cog",
      title: "網頁開發",
      text: "前端 HTML、CSS、JavaScript 與 React；後端 API、資料庫；學期末介紹網頁資安與防護。",
    },
    {
      icon: "fa fa-picture-o",
      title: "社群軟體演算法",
      text: "了解推薦演算法與流量機制，學習資訊素養與媒體識讀。",
    },
    {
      icon: "fa fa-magic",
      title: "洞悉網路上青少年的亞文化",
      text: "介紹二創、迷因、匿名文化等次文化現象及其背後的社會意涵。",
    },
    {
      icon: "fa fa-graduation-cap",
      title: "多元分享",
      text: "邀請科技業專家、學長姐與相關科系畢業生到課分享，拓展視野。",
    },
  ],
};

export default siteData;
