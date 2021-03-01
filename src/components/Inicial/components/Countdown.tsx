import { useContext } from 'react';
import { CountdownContext } from '../../../contexts/CountdownContext';
import styles from '../../../styles/components/Countdown.module.css'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChallengesContext } from '../../../contexts/ChallengesContext';

export function Countdown() {
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown 
  } = useContext(CountdownContext);

  const { dark } = useContext(ChallengesContext);
  
  const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span className={dark ? styles.darkTheme : undefined}>{minuteLeft}</span>
          <span className={dark ? styles.darkTheme : undefined}>{minuteRigth}</span>
        </div>
        <span className={dark ? styles.darkThemeColor : undefined}>:</span>
        <div>
          <span className={dark ? styles.darkTheme : undefined}>{secondLeft}</span>
          <span className={dark ? styles.darkTheme : undefined}>{secondRigth}</span>
        </div>
      </div>
    
      { hasFinished ? (
        <button 
          disabled
          className={`${styles.countdownButton} ${dark ? styles.darkTheme : undefined}`}
        >
          Ciclo encerrado
          <FontAwesomeIcon icon={faCheckCircle} className={styles.cycleClosed}/>
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive} ${dark ? styles.darkTheme : undefined}`}
              onClick={resetCountdown} 
            >
              Abandonar ciclo
            </button>
          ) : (
            <button 
              type="button" 
              onClick={startCountdown} 
              className={styles.countdownButton}
            >
              Iniciar um ciclo
            </button>
          ) }  
        </>
      )}
    </div>
  )
}