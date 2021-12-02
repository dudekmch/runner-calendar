import {useEffect, useState,} from 'react';
import { createPortal } from 'react-dom'
import LoadingSpinnerOverLay from '../../common/loadingSpinnerOverlay/LoadingSpinnerOverlay';

const Logout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // signOut(firebaseAuth)
    // .then(() => {
    //   setIsLoading(false);
    // })
    // .catch((error) => {
      // An error happened.
    // });
  }, [])

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
