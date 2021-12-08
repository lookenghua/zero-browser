import {app, BrowserWindow} from "electron"

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false
    })

    win.loadURL("http://localhost:5000")
}

app.whenReady().then(() => {
    createWindow()
})
