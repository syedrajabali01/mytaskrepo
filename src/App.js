import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card  from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <Button></Button><br>
      </br>
     <Button >Click me</Button> 
     <h1>Rajab </h1>
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="logo192.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
     


    </div>
  );
}

export default App;
