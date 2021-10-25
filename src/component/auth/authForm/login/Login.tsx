import {useRef, useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseAuth} from '../../../../Firebase';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';
import {useHistory, useLocation} from 'react-router';

import StyledContainer from '../../../common/container/StyledContainer';

import useError from '../../../../hook/UseError';
import LoadingSpinner from '../../../common/loadingSpinner/LoadingSpinner';

import styles from '../../Loading.module.css';

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const loginError = useError();
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const queryParams = new URLSearchParams(location.search);
  const isCreateAccountSuccessfulContext =
    queryParams.get('createUserSuccess') === 'true';

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if (emailInputRef.current?.value && passwordInputRef.current?.value) {
      setIsLoading(true);
      signInWithEmailAndPassword(
        firebaseAuth,
        emailInputRef.current.value,
        passwordInputRef.current.value
      )
        .then((userCredential) => {
          setIsLoading(false);
          history.push('/trainingTable');
        })
        .catch((error) => {
          console.error(error.message);
          setIsLoading(false);
          loginError.setError({
            isError: true,
            messages: [error.message],
          });
        });
    }
  };

  const onSwitchCreateAccountModeButtonHandler = () => {
    history.push('/auth/createAccount');
  };

  return (
    <StyledContainer>
      <Row>
        <Col>
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId='formLoginEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                ref={emailInputRef}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formLoginPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                ref={passwordInputRef}
                required
              />
            </Form.Group>
            
            {isCreateAccountSuccessfulContext && (
              <Alert variant={'success'}>
                registration was successful, please login
              </Alert>
            )}
            {loginError.error.messages?.map((errorMessage) => {
              return <Alert key={errorMessage} variant={'danger'}>{errorMessage}</Alert>;
            })}

            {!isLoading && (
              <>
                <Button variant='primary' type='submit'>
                  Login
                </Button>
                <Button
                  variant='link'
                  onClick={onSwitchCreateAccountModeButtonHandler}>
                  or create account
                </Button>
              </>
            )}

            {isLoading && (
              <div className={styles.loading}>
                <LoadingSpinner />
              </div>
            )}
          </Form>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Login;
