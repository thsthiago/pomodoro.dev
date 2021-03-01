import { useContext } from "react"
import { ChallengesContext } from "../../../contexts/ChallengesContext"
import styles from '../../../styles/components/Warning.module.css';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

export function Warning() {
  const { signOut, sair, apagarUser, dark } = useContext(ChallengesContext);

  return(
    <div className={`${styles.container} ${signOut ? undefined : styles.display} ${dark ? styles.darkTheme : undefined}`}>
      <FontAwesomeIcon 
        icon={faExclamationTriangle} 
        className={styles.icon} 
      />
      <strong className={dark ? styles.darkTheme : undefined}>Ao sair da sua conta, apagara todo o seu progresso.</strong>
      <div>
        <button className={styles.voltar} onClick={sair}>Voltar</button>
        <Link href="/" >
          <button className={styles.continuar} onClick={apagarUser}>Continuar</button>
        </Link>  
      </div>
    </div>
  )
}