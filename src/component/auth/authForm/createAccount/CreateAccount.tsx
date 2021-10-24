import {createUserWithEmailAndPassword} from '@firebase/auth';
import {useRef, useState} from 'react';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';
import {useHistory} from 'react-router';
import {firebaseAuth} from '../../../../Firebase';
import useError from '../../../../hook/UseError';
import StyledContainer from '../../../common/container/StyledContainer';
import LoadingSpinner from '../../../common/loadingSpinner/LoadingSpinner';

import styles from '../Loading.module.css';

const CreateAccount = () => {
  const history = useHistory();
  const responseError = useError();

  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if (
      passwordInputRef.current &&
      passwordConfirmationInputRef.current &&
      emailInputRef.current
    ) {
      const isPasswordValid = checkIsPasswordValid(passwordInputRef.current.value);
      const isPasswordConfirmed = passwordInputRef.current.value === passwordConfirmationInputRef.current.value
      if(isPasswordValid && isPasswordConfirmed){
        fetchCreateAccountData(emailInputRef.current.value, passwordInputRef.current.value)
      } else {
        responseError.setError({
          isError: true,
          messages: createPasswordValidationErrors(isPasswordConfirmed, isPasswordValid)
        })
      }
    }
  };

  const createPasswordValidationErrors = (isConfirmed: boolean, isValid: boolean) : string[]=> {
    const errors: string[] = [];
    if(!isValid){
      errors.push('The password does not meet the requirements')
    }
    if(!isConfirmed){
      errors.push('Passwords are different')
    }
    return errors;
  }

  const checkIsPasswordValid = (password: string): boolean => {
    return password.length >= 8;
  };

  const fetchCreateAccountData = (email: string, password: string) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsLoading(false);
        history.push('/login?createUserSuccess=true');
      })
      .catch((error) => {
        console.error(error.message);
        setIsLoading(false);
        responseError.setError({
          isError: true,
          messages: [error.message],
        });
      })
  };

  const onSwitchLogInModeButtonHandler = () => {
    history.push('/login');
  };

  return (
    <StyledContainer>
      <Row>
        <Col>
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId='formCreateAccountEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                ref={emailInputRef}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formCreateAccountPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                ref={passwordInputRef}
                required
              />
              <Form.Text className='text-muted'>
                The password must contain at least 8 characters
              </Form.Text>
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='formCreateAccountPasswordConfirmation'
            >
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Repeat password'
                ref={passwordConfirmationInputRef}
                required
              />
            </Form.Group>
            {responseError.error.messages?.map((errorMessage) => {
              return <Alert key={errorMessage} variant={'danger'}>{errorMessage}</Alert>;
            })}
            {!isLoading && (
              <>
            <Button variant='primary' type='submit'>
              Create account
            </Button>
            <Button variant='link' onClick={onSwitchLogInModeButtonHandler}>
              or login
            </Button>
            </>
            )}
             {isLoading && (
              <div className={styles.loading}>
                <LoadingSpinner/ >
              </div>
            )}
          </Form>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default CreateAccount;
