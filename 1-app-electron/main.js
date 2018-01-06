// app module maneja el ciclo de vida de la app
// BrowserWindow maneja la ventana de la app

const{
    app,
    BrowserWindow
} = require('electron');

let win;

const appUrl = `file://${__dirname}/index.html`

function createElectronShell() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    // cargar el HTML con loadURL
    win.loadURL(appUrl);
    win.on('closed', () => {
        win = null
    });
    // ABRE HERRAMIENTAS DE DESARROLLO DE CHROMIUM
    win.webContents.openDevTools();
}

app.on('ready', createElectronShell);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
    if (appShell == null) createElectronShell();
});
