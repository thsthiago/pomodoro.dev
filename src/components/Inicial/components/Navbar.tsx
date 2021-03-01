import { Logo } from "./Logo";

import styles from '../../../styles/components/Navbar.module.css';
import { useContext } from "react";
import { ChallengesContext } from "../../../contexts/ChallengesContext";

import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Navbar() {
  const { dark, activeDark, sair } = useContext(ChallengesContext);

  return (
    <div className={`${styles.container} ${dark ? styles.darkTheme : undefined}`}>
      <Logo />
      <FontAwesomeIcon 
        icon={faLightbulb} 
        className={`${styles.icon} ${dark ? styles.darkActive : undefined}`} 
        onClick={activeDark} 
      />
      <FontAwesomeIcon 
        icon={faSignOutAlt} 
        className={`${styles.icon} ${dark ? styles.darkTheme : undefined}`} 
        onClick={sair} 
      />
    </div>
  )
}