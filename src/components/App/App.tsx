import React from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Header from '../Header';
import './App.css';

function TestComponent() {
  return <img width="16" src="http://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon" />
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"></Header>
      <Container>
        <Button content="Click me" onClick={window.alert}
        appendIcon={<TestComponent/>}>
          Alert
         </Button>
      </Container>
    </div>
  );
}

React.createElement('div', {
  children: React.createElement('asdds')
});


export default App;
