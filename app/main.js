const { app, BrowserWindow } = require("electron");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile("src/index.html");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);
