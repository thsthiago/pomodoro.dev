import { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContext';
import styles from '../../../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel, dark } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return(
    <header className={styles.experienceBar}>
      <span className={dark ? styles.darkTheme : undefined}>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel || '0'}%` }} />

        <span className={`${styles.currentExperience} ${dark ? styles.darkTheme : undefined}`} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span className={dark ? styles.darkTheme : undefined}>{experienceToNextLevel} xp</span>
    </header>
  )
}