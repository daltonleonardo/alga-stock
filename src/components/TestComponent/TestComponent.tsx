import React, { useState, useEffect } from 'react';
import './TestComponent.css';

function TestComponent(props: { name: string }) {
    const [age, setAge] =  useState(19);
// const state = {
//     age: 21
// }

// 1 - parametro função de callBack
// 2 - parametro array de dependências
useEffect(() => {
    console.log('Component was created');
}, [])

useEffect(() => {
    console.log(`Age has been updated to:${age}`);
}, [age])

return <div className="TestComponent">
    Olá { props.name }, {age}
    <button onClick={() => {
        setAge(age+1);
        // state.age++;
        // console.log(state.age);
    }}>
        +
    </button>
    </div>

}

export default TestComponent;