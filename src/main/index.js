import { app, BrowserWindow, ipcMain, globalShortcut, shell } from 'electron' // eslint-disable-line
import ipc from './tutorial/ipc' // eslint-disable-line
import lowdb from './tutorial/lowdb' // eslint-disable-line

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\') // eslint-disable-line
}

let mainWindow

app.commandLine.appendSwitch('inspect', '5858')

const winURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9080'
    : `file://${__dirname}/index.html`

function initData() {
  mainWindow.webContents.on('did-finish-load', () => {
    let workspacePath = ''

    workspacePath = lowdb.get('workspace.path')

    mainWindow.webContents.send('workspace-path', workspacePath)
  })
}

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 650,
    useContentSize: true,
    width: 1264,
    frame: true,
    show: false
  })

  // mainWindow.setMenu(null)

  initData()

  mainWindow.loadURL(winURL)
  // mainWindow.setMinimumSize(1264, 563)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // shell.showItemInFolder('C:')

  // const child = new BrowserWindow({
  //   parent: mainWindow,
  //   modal: true,
  //   show: false
  // })
  // child.loadURL('F://Study//html//')
  // child.once('ready-to-show', () => {
  //   child.show()
  // })

  // globalShortcut.register('CommandOrControl+X', () => {
  //   console.log('CommandOrControl+X is pressed')
  // })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
