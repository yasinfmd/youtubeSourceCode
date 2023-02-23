const { app, BrowserWindow } = require('electron');
const path = require('path');
if (require('electron-squirrel-startup')) {
  app.quit();
}
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
};
//app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('browser-window-focus',(e)=>{
  console.log('focus')
})

app.on('browser-window-created',(e)=>{
  console.log('created')

})

app.on('browser-window-blur',(e)=>{
  console.log('blur')
})


app.on('before-quit',(e)=>{
  console.log('uygulamadan cıkmadan önce')
})

app.on('will-quit',(e)=>{
  console.log('uygulamadan cıkılıyorr')
})

//app.exit()
app.whenReady().then(()=>{
  if(app.isReady()){
    createWindow()
console.log(app.getSystemLocale())

  }
console.log(app.isReady())
})
app.on("render-process-gone",()=>{
  console.log("kill edildi")
  app.relaunch()
})

app.on("session-created",(session)=>{
  console.log("sessiıns")
})
app.on("gpu-info-update",(info)=>{
  console.log('info')
})

// setTimeout(()=>{
//  // app.quit()
//  // app.relaunch()
// },6000)

console.log(app.getAppPath())
console.log(app.getPath("desktop"))
console.log(app.getVersion())
console.log(app.getName())
console.log('app', app.getLocale())

console.log('app', app.getLocaleCountryCode())

console.log(app.getAppMetrics())
app.getGPUInfo("complete").then((r)=>{
  console.log('gpu', r)
})

console.log(app.isEmojiPanelSupported())

app.showAboutPanel()

setTimeout(()=>{
app.focus()
app.showEmojiPanel()
},5000)

app.applicationMenu=null