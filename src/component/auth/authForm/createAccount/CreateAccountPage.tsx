import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useRef, useReducer, useEffect } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { firebaseAuth } from "../../../../Firebase"
import StyledContainer from "../../../common/container/StyledContainer";

interface ICredentialState {
  email: string | null;
  password: {
    value: string | null;
    isValid: boolean;
    isConfirmed: boolean;
  };
}

const initialICredentialState: ICredentialState = {
  email: null,
  password: {
    value: null,
    isValid: false,
    isConfirmed: false,
  },
};

enum CredentialActionType {
  checkCredetialValid = "VALIDATION",
}

interface ICredentialAction {
  type: CredentialActionType;
  payload: {
    email: string;
    password: string;
    repeatedPassword: string;
  };
}

const credentialReducer = (
  state: ICredentialState,
  action: ICredentialAction
) => {
  if (action.type === CredentialActionType.checkCredetialValid) {
    return {
      email: action.payload.email,
      password: {
        value: action.payload.password,
        isValid: checkIsPasswordValid(action.payload.password),
        isConfirmed:
          action.payload.password === action.payload.repeatedPassword,
      },
    };
  }
  return state;
};

const checkIsPasswordValid = (password: string): boolean => {
  return password.length >= 8;
};

const CreateAccountPage = () => {
  const history = useHistory();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationInputRef = useRef<HTMLInputElement>(null);

  const [credentialState, dispatchCredential] = useReducer(
    credentialReducer,
    initialICredentialState
  );

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    if (
      passwordInputRef.current &&
      passwordConfirmationInputRef.current &&
      emailInputRef.current
    ) {
      dispatchCredential({
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
    if (credentialState.email &&
      credentialState.password.value &&
      credentialState.password.isConfirmed &&
      credentialState.password.isValid) {
      createUserWithEmailAndPassword(firebaseAuth, credentialState.email, credentialState.password.value)
        .then((userCredential) => {
          console.log(userCredential)
          history.push("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
    }
  }, [credentialState, history]);

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
            {!credentialState.password.isValid &&
              !credentialState.password.isConfirmed && (
                <Alert variant={"danger"}>
                  Hasło nie spełnia minimalnych wymagań
                </Alert>
              )}
            {!credentialState.password.isConfirmed && (
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

export default CreateAccountPage;
