import React from 'react';

class ClassComponent extends React.Component<{name: string}> {
    state = {
        name: 'Mundo!!!'
    }

   render() {
    //    return <div>Olá, { this.state.name }.Eu sou um componente baseado em classe</div>
       return <div>
            <p>name: { this.state.name }</p>
            <button onClick={() => {
             this.setState({name: 'Dalton'})
            }}>Click me</button>
        </div>
   }
}

export default ClassComponent;