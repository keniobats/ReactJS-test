import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Login';
import CardList from './ItemListContainer';

export const Body = ( {greeting } ) => {
  
  return (
    <div>
    <br/>
    <center>
      <Row>
        <Col>
        <h3> { greeting }</h3>
        <p>Podrás encontrar cursos gratuitos y pagos.</p>
        <CardList/>
        </Col>
        {/* <Col xs={4}>
          <Login/>
        </Col> */}
      </Row>
      </center>
    </div>
  );
}

export default Body;
