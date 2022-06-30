import { app, BrowserWindow, ipcMain } from 'electron';
const electronReload = require('electron-reload');
const path = require('path');

// require('electron-reload')(__dirname + './index.html', {
//     electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
//   });

let mainWindow : BrowserWindow;
app.on("ready", createWindow)

function createWindow (): void {
    mainWindow = new BrowserWindow({
        width:800,
        height:700,
        webPreferences:{
            nodeIntegration: true,
            preload: __dirname + "/preload.js"
        },
       
        show:false
    })

    mainWindow.loadFile("./index.html")
    mainWindow.on("ready-to-show", () => mainWindow.show())
}