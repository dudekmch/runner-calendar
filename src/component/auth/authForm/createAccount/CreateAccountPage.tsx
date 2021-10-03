import { useRef, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import StyledContainer from "../../../common/container/StyledContainer";

const CreateAccountPage = () => {
  const [isFirstLoad, setFirstLoad] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isPasswordConfimed, setPasswordConfimed] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationInputRef = useRef<HTMLInputElement>(null);

  const checkIsPasswordValid = (): boolean => {
    if (passwordInputRef.current) {
      return passwordInputRef.current.value.length >= 8;
    }
    return false;
  };

  const checkIsPasswordConfimed = (): boolean => {
    if (passwordInputRef.current && passwordConfirmationInputRef.current) {
      return (
        passwordInputRef.current.value ===
        passwordConfirmationInputRef.current.value
      );
    }
    return false;
  };

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    setFirstLoad(false);
    setPasswordValid(checkIsPasswordValid());
    setPasswordConfimed(checkIsPasswordConfimed());
    event.preventDefault();
    if (isPasswordValid && isPasswordConfimed) {
      console.log("LOGIN!!!!");
    }
  };

  return (
    <StyledContainer>
      <Row>
        <Col>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInputRef}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
                required
              />
              <Form.Text className="text-muted">
                Haslo musi się składać z co najmniej 8. znaków
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPasswordConfirmation"
            >
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat password"
                ref={passwordConfirmationInputRef}
                required
              />
            </Form.Group>
            {!isPasswordValid && !isFirstLoad && (
              <Alert variant={"danger"}>
                Hasło nie spełnia minimalnych wymagań
              </Alert>
            )}
            {!isPasswordConfimed && !isFirstLoad && (
              <Alert variant={"danger"}>Hasła są rózne</Alert>
            )}
            <Button variant="primary" type="submit">
              Create account
            </Button>
            <Button variant="link">or log in</Button>
          </Form>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default CreateAccountPage;
