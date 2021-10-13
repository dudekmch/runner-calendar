import { useEffect, useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../../Firebase";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import StyledContainer from "../../../common/container/StyledContainer";

import { ILoginProps } from "./LoginModel";

const Login = (props: ILoginProps) => {
  const history = useHistory();

  const [login, setLogin] = useState(null as string | null);
  const [password, setPassword] = useState(null as string | null);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if (emailInputRef.current?.value && passwordInputRef.current?.value) {
      setLogin(emailInputRef.current.value);
      setPassword(passwordInputRef.current.value);
    }
  };

  useEffect(() => {
    if (login && password) {
      console.log(login, password);
      signInWithEmailAndPassword(firebaseAuth, login, password)
        .then((userCredential) => {
          console.log(userCredential);
          history.push('/trainingTable')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    }
  }, [login, password, history]);

  const onSwitchCreateAccountModeButtonHandler = () => {
    history.push("/createAccount");
  };

  return (
    <StyledContainer>
      <Row>
        <Col>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formLoginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInputRef}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
                required
              />
            </Form.Group>
            {props.isCreatedAccoountSuccessContext && (
              <Alert variant={"success"}>
                registration was successful, please login
              </Alert>
            )}
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button
              variant="link"
              onClick={onSwitchCreateAccountModeButtonHandler}
            >
              or create account
            </Button>
          </Form>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Login;
