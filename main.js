const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname,'node_modules','bin','electron')
})

let mainWindow
function createMainWindow () {
    mainWindow  = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation:true,
      // enableRemoteModule:false,
      preload: path.join( __dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('./index.html')
}




app.whenReady().then(() => {
  createMainWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})




ipcMain.on('salu', (e,message)=>{
  
  let nuevoMessage = message + 'Gustavo'

  mainWindow.webContents.send('hola', nuevoMessage)
})

