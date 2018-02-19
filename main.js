'use strict'

const{BrowswerWindow,app}=require('electron')

var mainWindow=null;

app.on('ready',()=>{
    mainWindow=new BrowserWindow({});
    mainWindow.loadURL('file://' + __dirname + '/app/index.html')
})
