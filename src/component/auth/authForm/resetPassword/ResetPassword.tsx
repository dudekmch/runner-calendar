import {useRef, useState} from 'react';
import {Alert, Col, Form, Row, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import useError from '../../../../hook/UseError';
import StyledContainer from '../../../common/container/StyledContainer';
import LoadingSpinner from '../../../common/loadingSpinner/LoadingSpinner';

import styles from '../../Loading.module.css';

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const loginError = useError();
  const history = useHistory();

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if (emailInputRef.current?.value) {
      // setIsLoading(true);
      // sendPasswordResetEmail(firebaseAuth, emailInputRef.current.value)
      //   .then((userCredential) => {
      //     setIsLoading(false);
      //     history.push('/login');
      //   })
      //   .catch((error) => {
      //     console.error(error.message);
      //     setIsLoading(false);
      //     loginError.setError({
      //       isError: true,
      //       messages: [error.message],
      //     });
      //   });
    }
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <StyledContainer>
            <Row>
              <Col>
                <h2>Reset Password</h2>
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
                  {loginError.error.messages?.map((errorMessage) => {
                    return (
                      <Alert key={errorMessage} variant={'danger'}>
                        {errorMessage}
                      </Alert>
                    );
                  })}
                  {!isLoading && (
                    <>
                      <Button variant='primary' type='submit' className='w-100'>
                        Reset Password
                      </Button>
                      <div className='w-100 text-center mt-2'>
                        <Link to='/auth/login'>Login</Link>
                      </div>
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
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
