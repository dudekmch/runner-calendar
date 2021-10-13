import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useRef, useEffect } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { firebaseAuth } from "../../../../Firebase"
import StyledContainer from "../../../common/container/StyledContainer";
import { ICreateAccountProps } from "./CreateAccountModel";
import useCredentials, { CredentialActionType } from "./UseCredentials";

const CreateAccount = (props: ICreateAccountProps) => {
  const history = useHistory();
  const credentials = useCredentials()

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    if (
      passwordInputRef.current &&
      passwordConfirmationInputRef.current &&
      emailInputRef.current
    ) {
      credentials.dispatchCredential({
        type: CredentialActionType.checkCredetialValid,
        payload: {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          repeatedPassword: passwordConfirmationInputRef.current.value,
        },
      });
      event.preventDefault();
    }
  };

  useEffect(() => {
    
    if (credentials.email &&
      credentials.passwordValue &&
      credentials.isPasswordConfirmed &&
      credentials.isPasswordValid) {
      createUserWithEmailAndPassword(firebaseAuth, credentials.email, credentials.passwordValue)
        .then((userCredential) => {
          console.log(userCredential)
          props.onCreateAccountSuccessHandler()
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage)
        });
    }
  }, [credentials, props]);

  const onSwitchLogInModeButtonHandler = () => {
    history.push("/login");
  };

  return (
    <StyledContainer>
      <Row>
        <Col>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formCreateAccountEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInputRef}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCreateAccountPassword">
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
              controlId="formCreateAccountPasswordConfirmation"
            >
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat password"
                ref={passwordConfirmationInputRef}
                required
              />
            </Form.Group>
            {!credentials.isPasswordValid && (
                <Alert variant={"danger"}>
                  Hasło nie spełnia minimalnych wymagań
                </Alert>
              )}
            {!credentials.isPasswordConfirmed && (
              <Alert variant={"danger"}>Hasła są rózne</Alert>
            )}
            <Button variant="primary" type="submit">
              Create account
            </Button>
            <Button variant="link" onClick={onSwitchLogInModeButtonHandler}>
              or login
            </Button>
          </Form>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default CreateAccount;
