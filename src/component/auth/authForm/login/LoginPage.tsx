import { useRef, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";

import useHttp, { HttpMethod, IRequestConfig } from "../../../../hook/UseHttp";
import StyledContainer from "../../../common/container/StyledContainer";

const LoginPage = () => {
  const history = useHistory();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { isLoading, error, sendRequest: sendLoginRequest } = useHttp();

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    console.log(emailInputRef.current?.value, passwordInputRef.current?.value);
    if (emailInputRef.current?.value && passwordInputRef.current?.value) {
      const request: IRequestConfig = {
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyJhuaReJZdL2-OMap8dnNW_HTa037Ukg",
        method: HttpMethod.POST,
        body: {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            returnSecureToken: true
        },
        headers: {'Content-Type': 'application/json'}
      };
      sendLoginRequest(request, (data) => console.log(data));
    }
  };

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
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button variant="link" onClick={onSwitchCreateAccountModeButtonHandler}>or create account</Button>
          </Form>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default LoginPage;
