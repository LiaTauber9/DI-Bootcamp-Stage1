import Card from 'react-bootstrap/Card';

function CardInf() {
  return (
    <Card style={{ width: '18rem' }}>
       <i class="fa-solid fa-building" style={{ color:'tomato'}}></i>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardInf;