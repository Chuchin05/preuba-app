import { Container } from 'reactstrap';
// import "Style" form "style"
import './App.css';
import ItemListContainer from './component/ItemListContainer';
import NavBar from './component/NavBar';
import React from 'react';
import { ItemDetailContainer } from './component/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css";
 



function App() {
  return (
    <Container fluid>
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      </div>

    
    </Container>
  );
}

export default App;
  
