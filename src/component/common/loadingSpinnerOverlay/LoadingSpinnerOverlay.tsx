import LoadingSpinner from '../loadingSpinner/LoadingSpinner';

import styles from './LoadingSpinnerOverlay.module.css'

const LoadingSpinnerOverLay = () => {
  return (
    <div className={styles.overlay}>
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
};

export default LoadingSpinnerOverLay;
