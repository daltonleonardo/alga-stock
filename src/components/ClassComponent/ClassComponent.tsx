import React from 'react';

class ClassComponent extends React.Component<{name: string}> {
    
    constructor(props: any) {
        super(props);
        console.log('contructor reached')
    }
    state = {
        name: 'Mundo!!!'
    }

    componentDidMount() {
        console.log('DidMount reached');
    }

    componentDidUpdate() {
        console.log('didUpdate reached');
    }

   render() {
       console.log('renderl reached');
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