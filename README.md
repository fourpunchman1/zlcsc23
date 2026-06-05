# 中崙資研 ZLCSC-23 官網

第 23 屆中崙資訊研習社官方網站。架構參考 `zlcsc-webpage-sourcecode`（React 多頁式），內容整合 `ZLCSC-22` 與本屆社團資料。

## 功能頁面

- **首頁**：Hero、研究方向、專題計畫、教學計劃、幹部、合作夥伴
- **關於**：社團介紹、社徽理念
- **研究方向**：本屆教學主題
- **團隊**：第 23 屆幹部
- **專題詳情**：各項計畫說明
- **聯絡**：導向 Instagram 等社群

## 開發

```bash
cd zlcsc23
npm install
npm start
```

建置：

```bash
npm run build
```

## 修改內容

主要編輯 `src/data/siteData.js`（幹部、聯絡方式、教學計畫、專題等）。幹部照片放在 `public/images/team/`（`01.jpg`～`10.jpg`）。

## 部署

```bash
npm run deploy
```

（需設定 `package.json` 的 `homepage` 為 GitHub Pages 網址）
