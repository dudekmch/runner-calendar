import {signOut} from '@firebase/auth';
import {useEffect, useState,} from 'react';
import { createPortal } from 'react-dom'
import {useHistory} from 'react-router';
import {firebaseAuth} from '../../../Firebase';
import LoadingSpinnerOverLay from '../../common/loadingSpinnerOverlay/LoadingSpinnerOverlay';

const Logout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    signOut(firebaseAuth)
    .then(() => {
      setIsLoading(false);
      history.push('login');
    })
    .catch((error) => {
      // An error happened.
    });
  }, [history])

  const createSpinnerOverlay = () => {
      const overlayRoot: HTMLElement | null = document.getElementById('overlay-root') 
      if(overlayRoot) {
        return createPortal(<LoadingSpinnerOverLay/>, overlayRoot)
      }
  }

  return (
    <>
      {isLoading && createSpinnerOverlay()}
    </>
  );
};

export default Logout;
