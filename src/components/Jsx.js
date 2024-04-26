import React from 'react'

/*const Jsx = () =>{
    return(
        <h1>hello JSX</h1>
    )
}*/
const Jsx =() => {
    return React.createElement('div',{id:'hello',className:'helloWorld'},React.createElement('h1',null,'Hello World'))
}


export default Jsx