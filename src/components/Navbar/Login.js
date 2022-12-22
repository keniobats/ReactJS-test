import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Login() {
  return (
    <Card>
      <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="juan@ejemplo.com" />
            <Form.Text className="text-muted">
            Nunca compartiremos tu información con terceros.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordarme" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Enviar
        </Button>
        </Form>
      </Card.Body>
    </Card>
    
  );
}

export default Login;