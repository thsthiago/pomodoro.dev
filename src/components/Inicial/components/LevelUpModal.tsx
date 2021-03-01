import { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContext';
import styles from '../../../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal, dark } = useContext(ChallengesContext);

  return (
    <div className={`${styles.overlay} ${dark ? styles.darkThemeOverlay : undefined}`}>
      <div className={`${styles.container} ${dark ? styles.darkTheme : undefined}`}>
        <header>{level}</header>

        <strong className={dark ? styles.darkTheme : undefined}>Parabéns</strong>
        <p className={dark ? styles.darkTheme : undefined}>Você alcançou um novo level.</p>

        <button onClick={closeLevelUpModal} type="button">
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  )
}