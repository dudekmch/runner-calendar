import { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import StyledContainer from "../../../common/container/StyledContainer";

const LoginPage = () => {

    const emailInputRef =  useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        console.log(emailInputRef.current?.value, passwordInputRef.current?.value)
    }

  return (
    <StyledContainer>
      <Row>
        <Col>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={passwordInputRef} required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button variant="link">or create account</Button>
          </Form>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default LoginPage;
