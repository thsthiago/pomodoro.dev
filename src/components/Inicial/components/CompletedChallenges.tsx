import { useContext } from 'react';
import { ChallengesContext } from '../../../contexts//ChallengesContext';
import styles from '../../../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { challengesCompleted, dark } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span className={dark ? styles.darkTheme : undefined}>Desafios completos</span>
      <span className={dark ? styles.darkTheme : undefined}>{challengesCompleted}</span>
    </div>  
  );
}