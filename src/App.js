import { Container } from 'reactstrap';
// import "Style" form "style"
import './App.css';
import ItemListContainer from './component/ItemListContainer';
import NavBar from './component/NavBar';


 



function App() {
  return (
    <Container fluid>
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      </div>

    
    </Container>
  );
}

export default App;
  
