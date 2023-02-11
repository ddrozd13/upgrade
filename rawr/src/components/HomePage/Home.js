import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../PageLayout/PageLayout";
import styles from './Home.module.scss';

const App = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.description}>
            <button onClick={() => navigate('/clothing')} className={styles.description_button}>Перейти к покупкам</button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default App;
