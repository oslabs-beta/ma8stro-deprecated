"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electronReload = require('electron-reload');
const path = require('path');
// require('electron-reload')(__dirname + './index.html', {
//     electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
//   });
let mainWindow;
electron_1.app.on("ready", createWindow);
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 700,
        webPreferences: {
            preload: __dirname + "/preload.js"
        },
        show: false
    });
    mainWindow.loadFile("./index.html");
    mainWindow.on("ready-to-show", () => mainWindow.show());
}
