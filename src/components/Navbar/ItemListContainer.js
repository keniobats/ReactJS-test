import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



function CardList() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://placehold.co/40" />
        <Card.Body>
          <Card.Title>Ciberseguridad</Card.Title>
          <Card.Text>
            Descripción.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">$18.000</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://placehold.co/40" />
        <Card.Body>
          <Card.Title>Fullstack</Card.Title>
          <Card.Text>
            Descripción
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">$20.000</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://placehold.co/40" />
        <Card.Body>
          <Card.Title>ReactJS</Card.Title>
          <Card.Text>
            Descripción.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">$50.000</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://placehold.co/40" />
        <Card.Body>
          <Card.Title>Photoshop</Card.Title>
          <Card.Text>
            Descripción.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">$30.000</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://placehold.co/40" />
        <Card.Body>
          <Card.Title>AngularJS</Card.Title>
          <Card.Text>
            Descripción.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">$15.000</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardList;