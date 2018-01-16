'use strict'

import { app, BrowserWindow, Menu } from 'electron'
import i18n from 'i18n'
import path from 'path'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow

i18n.configure({
  locales: ['en-US', 'zh-CN'], // setup some locales - other locales default to en_US silently
  defaultLocale: 'zh-CN',
  directory: path.join(__dirname, '/locales'), // i18n 翻译文件目录，我的是 i18n， 可以写成其他的。
  updateFiles: false,
  extension: '.json'
})

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createMenu () {
  i18n.setLocale(app.getLocale())
  // console.log(i18n)
  // console.log(i18n.__('edit'))
  const template = [
    {
      id: '1',
      label: i18n.__('edit'),
      submenu: [
        {
          label: i18n.__('undo'),
          role: 'undo'
        },
        {
          label: i18n.__('redo'),
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          label: i18n.__('cut'),
          role: 'cut'
        },
        {
          label: i18n.__('copy'),
          role: 'copy'
        },
        {
          label: i18n.__('paste'),
          role: 'paste'
        },
        {
          label: i18n.__('pasteandmatchstyle'),
          role: 'pasteandmatchstyle'
        },
        {
          label: i18n.__('delete'),
          role: 'delete'
        },
        {
          label: i18n.__('selectall'),
          role: 'selectall'
        }
      ]
    },
    {
      id: '2',
      label: i18n.__('view'),
      role: 'view',
      submenu: [
        {
          label: i18n.__('reload'),
          role: 'reload'
        },
        {
          label: i18n.__('forcereload'),
          role: 'forcereload'
        },
        {
          label: i18n.__('toggledevtools'),
          role: 'toggledevtools'
        },
        {
          type: 'separator'
        },
        {
          label: i18n.__('resetzoom'),
          role: 'resetzoom'
        },
        {
          label: i18n.__('zoomin'),
          role: 'zoomin'
        },
        {
          label: i18n.__('zoomout'),
          role: 'zoomout'
        },
        {
          type: 'separator'
        },
        {
          label: i18n.__('togglefullscreen'),
          role: 'togglefullscreen'
        }
      ]
    },
    {
      id: '3',
      label: i18n.__('window'),
      role: 'window'
    },

    {
      id: '4',
      label: i18n.__('help'),
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('http://electron.atom.io') }
        },
        {
          label: '我的博客',
          click () { require('electron').shell.openExternal('https://www.yihy.cc') }
        }
      ]
    }
  ]

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {
          lable: i18n.__('about'),
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          role: 'services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          role: 'hide'
        },
        {
          role: 'hideothers'
        },
        {
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          label: i18n.__('quit'),
          accelerator: 'CmdOrCtrl+Q',
          role: 'quit'
        }
      ]
    })
    // 编辑菜单
    template[1].submenu.push(
      {
        type: 'separator'
      },
      {
        label: 'Speech',
        submenu: [
          {
            role: 'startspeaking'
          },
          {
            role: 'stopspeaking'
          }
        ]
      }
    )
    // 窗口菜单
    template[3].submenu = [
      {
        label: i18n.__('close'),
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
      {
        label: i18n.__('minimize'),
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: i18n.__('zoom'),
        role: 'zoom'
      },
      {
        type: 'separator'
      },
      {
        label: 'Bring All to Front',
        role: 'front'
      }
    ]
  } else {
    template.splice(2, 1)
  }

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

function createWindow () {
  createMenu()
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
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
