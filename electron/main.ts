import path from 'node:path'

import { app, BrowserWindow } from 'electron'

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')

// Since Electron does not have any concept of public directory in React terms
// (https://stackoverflow.com/a/63044338/13273004)
// and because files from public directory in Vite terms must not be accessed via code
// (https://vitejs.dev/guide/assets#the-public-directory),
// directory named 'resources' was chosen to avoid confusion.
process.env.RESOURCES = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../resources')

const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

class AppRunner {
  private mainWindow: BrowserWindow | null = null

  private electronApp: typeof app = app

  public runWhenReady() {
    this.electronApp.whenReady().then(() => {
      this.configureWindow()
      this.loadPage()
    })
  }

  private configureWindow() {
    this.mainWindow = new BrowserWindow({
      icon: path.join(process.env.RESOURCES, 'icon.png'),
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    })
  }

  private loadPage() {
    if (VITE_DEV_SERVER_URL) {
      this.mainWindow?.loadURL(VITE_DEV_SERVER_URL)

      return
    }

    this.mainWindow?.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

new AppRunner().runWhenReady()
