import { useLocalStorage } from '@/shared/lib/hooks/useLocalStorage';
import { WithRouter } from '../model/providers/WithRouter';
import styles from './styles/App.module.css';
import { useEffect } from 'react';

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <WithRouter></WithRouter>
      </div>
    </>
  );
};

export default App;
