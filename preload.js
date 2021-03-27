const {ipcRenderer, contextBridge} = require('electron')



contextBridge.exposeInMainWorld('electron', {

    saludo:{
        sendSaludo(message){
            
            ipcRenderer.send('salu', message )
        }
    },


    // recibirSaludo:{

    //     saludarVuelta(){
    //         let hd
    //         ipcRenderer.on('devuelta',(e,messageNuevo)=>{
    //             hd = messageNuevo
    //         })
    //         console.log(hd)
        
         
    //     }
        
        


    // }


})


ipcRenderer.on('hola',(e,nuevoMessage)=>{
            console.log(nuevoMessage)
})