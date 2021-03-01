import styles from '../../../styles/components/RegisterUser.module.css';
import { faFrownOpen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function RegisterUser () {
  return (
    <div className={styles.container}>

      <FontAwesomeIcon 
        icon={faFrownOpen} 
        className={styles.icon} 
      />
      <strong> Ops... Você ainda não se cadastrou</strong>
      <Link href="/">
        <button>Cadastre-se</button>
      </Link>
    </div>
  )
}