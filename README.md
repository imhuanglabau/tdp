# 使用 Create React App 開始

此專案是使用 [Create React App](https://github.com/facebook/create-react-app) 建立的。

## 可用的腳本

在專案目錄中，您可以執行以下命令：

### `npm start`

在開發模式下運行應用程式。\
打開 [http://localhost:3000](http://localhost:3000) 在瀏覽器中查看。

當您進行更改時，頁面將重新加載。\
您也可以在控制台中看到任何 lint 錯誤。

### `npm test`

在互動式監視模式下啟動測試運行器。\
有關更多信息，請參見 [運行測試](https://facebook.github.io/create-react-app/docs/running-tests) 部分。

### `npm run build`

將應用程式構建為生產環境的 `build` 資料夾。\
它正確地將 React 捆綁在生產模式中，並優化構建以獲得最佳性能。

構建是最小化的，文件名包括哈希值。\
您的應用程式已準備好部署！

有關更多信息，請參見 [部署](https://facebook.github.io/create-react-app/docs/deployment) 部分。

### `npm run eject`

**注意：這是一個單向操作。一旦您 `eject`，就無法回頭！**

如果您對構建工具和配置選擇不滿意，您可以隨時 `eject`。此命令將從您的專案中移除單一構建依賴項。

相反，它會將所有配置文件和過渡依賴項（webpack、Babel、ESLint 等）直接複製到您的專案中，這樣您就可以完全控制它們。除了 `eject` 之外的所有命令仍然可以正常工作，但它們將指向複製的腳本，以便您可以對其進行調整。在這一點上，您就獨自一人了。

您不必使用 `eject`。精心策劃的功能集適合小型和中型部署，您不應該感到有義務在準備好自定義時使用此功能。然而，我們理解，如果您無法在準備好時進行自定義，這個工具將毫無用處。

## 學習更多

您可以在 [Create React App 文檔](https://facebook.github.io/create-react-app/docs/getting-started) 中了解更多信息。

要學習 React，請查看 [React 文檔](https://reactjs.org/)。

### 代碼拆分

此部分已移至此處：[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### 分析捆綁包大小

此部分已移至此處：[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### 製作漸進式 Web 應用程式

此部分已移至此處：[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### 高級配置

此部分已移至此處：[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### 部署

此部分已移至此處：[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` 無法縮小

此部分已移至此處：[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 設置專案

要設置專案，請按照以下步驟操作：

1. 克隆存儲庫：
   ```sh
   git clone https://github.com/imhuanglabau/tdp.git
   cd tdp
   ```

2. 安裝依賴項：
   ```sh
   npm install
   ```

3. 在根目錄中創建 `.env` 文件並添加必要的環境變量：
   ```sh
   REACT_APP_API_BASE_URL=https://api.smartbustw.com/
   REACT_APP_LIFF_ID=2004573455-vYaQNa4z
   ```

## 運行專案

要運行專案，請使用以下命令：
```sh
npm start
```

這將啟動開發伺服器並在您的默認網頁瀏覽器中打開專案。該專案將在 [http://localhost:3000](http://localhost:3000) 上可用。

## 貢獻專案

要貢獻專案，請按照以下步驟操作：

1. Fork 存儲庫。
2. 為您的功能或錯誤修復創建一個新分支：
   ```sh
   git checkout -b my-feature-branch
   ```

3. 進行更改並使用描述性提交消息提交它們：
   ```sh
   git commit -m "Add new feature"
   ```

4. 將您的更改推送到您 fork 的存儲庫：
   ```sh
   git push origin my-feature-branch
   ```

5. 從您的分支創建一個 pull request 到主存儲庫的 `main` 分支。

請確保您的代碼遵循專案的代碼標準並包含適當的測試。
