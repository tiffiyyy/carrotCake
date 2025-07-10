// main.js 
// Last Updated: June 6, 2025 

const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 375,
    height: 612,
    resizable: false,
  })
  // win.setAspectRatio(1);
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

function goToScreen(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  // Show the selected screen
  const targetScreen = document.getElementById(screenId);
  targetScreen.classList.add('active');
}