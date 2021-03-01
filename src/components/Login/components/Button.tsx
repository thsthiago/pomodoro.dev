import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../../styles/components/Button.module.css';
import Link from 'next/link';

export default function Button({...dist}) {
  return (
    <div className={styles.container}>
      <strong className={dist.theme ? styles.darkTheme : undefined}>{dist.nome}</strong>
      <Link href="/pomodoro">
        <button type="button"><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/></button>
      </Link>
    </div>
  )
}