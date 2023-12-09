import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tags(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
            {props.descripcion}
        </Card.Text>
        <Button variant={props.buttonColor}>{props.raza}</Button>
      </Card.Body>
    </Card>
  );
}

export default Tags;