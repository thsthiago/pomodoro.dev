import { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContext';
import { CountdownContext } from '../../../contexts/CountdownContext';
import styles from '../../../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge, dark } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={`${styles.challengeBoxContainer} ${dark ? styles.darkThemeContainer : undefined}`}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header className={dark ? styles.darkTheme : undefined}>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong className={dark ? styles.darkTheme : undefined}>Novo desafio</strong>
            <p className={dark ? styles.darkTheme : undefined}>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong className={dark ? styles.darkTheme : undefined}>Inicie um ciclo para receber um novo desafio</strong>
          <p className={dark ? styles.darkTheme : undefined}>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>
      ) }
    </div>
  )
}