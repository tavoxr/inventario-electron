import React from 'react'



class App extends React.Component{



    render(){
        return(
            <div>

            
            <h1>App Component</h1>
            <button onClick={()=>{ electron.saludo.sendSaludo('hola a todos')  }}>Saludar</button>
            </div>
        )
    }
    


}


export default App