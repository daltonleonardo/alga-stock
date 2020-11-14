import React, { useState } from 'react';
// import Button from '../../shared/Button';
import Container from '../../shared/Container';
// import Input from '../../shared/input';
import Header from '../Header';
// import './App.css';

// function TestComponent() {
//   return <img width="16" src="http://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon" />
// }

function App() {

  // const [street, setStreet] = useState('');

  return (
    <div className="App">
      <Header title="AlgaStock"></Header>
      <Container>
        <ul>
        {
        ['Daniel', 'Wiliiam', 'Thiago', 'Daniel'].map((name, index) => {
          return <li key={index}>
            { name }
          </li>
        })
        /* <Button content="Click me" onClick={window.alert}
        appendIcon={<TestComponent/>}>
          Alert
         </Button>
         <Input
          label="Street"
          placeholder="E.g.: 15h Avenue"
          value={street}
          onChange={e => setStreet(e.target.value)}
        /> */}
        </ul>
      </Container>
    </div>
  );
}

React.createElement('div', {
  children: React.createElement('asdds')
});


export default App;
