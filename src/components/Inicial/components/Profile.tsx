import { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContext';
import styles from '../../../styles/components/Profile.module.css';

export function Profile( {...rest} ) {
  const { level, dark } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src={rest.avatar ? rest.avatar : '/logo.svg'} alt={rest.nome === null ? rest.login : rest.nome}/>
      <div>
        <strong className={dark ? styles.darkTheme : undefined}>{rest.nome === "null" ? rest.login : rest.nome}</strong>
        <p className={dark ? styles.darkTheme : undefined}>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}