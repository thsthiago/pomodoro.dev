import Link from 'next/link';
import styles from '../../../styles/components/Logo.module.css';

export function Logo() {
  return (
    <>
      <Link href="/">
        <img className={styles.logo} src="/logo.svg" alt="Logo"/>
      </Link>
    </>
  )
}