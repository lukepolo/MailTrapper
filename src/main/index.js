import { app, dialog, BrowserWindow } from "electron";

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}

let environment = process.env.NODE_ENV;

let mainWindow;
const winURL = environment === "development"
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`;

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  });

  if (environment === "development") {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadURL(winURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

import { autoUpdater } from "electron-updater";

autoUpdater.autoDownload = true;

autoUpdater.on("update-downloaded", () => {
  dialog.showMessageBox(
    {
      type: "info",
      buttons: ["Restart", "Later"],
      title: "Application Update",
      message: "WOO!",
      detail:
        "A new version has been downloaded. Restart the application to apply the updates."
    },
    response => {
      if (response === 0) {
        autoUpdater.quitAndInstall();
      }
    }
  );
});

app.on("ready", () => {
  if (process.env.NODE_ENV === "production") {
    autoUpdater.checkForUpdates();
  }
});
