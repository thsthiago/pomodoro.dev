import { useContext } from "react"
import { ChallengesContext } from "../../../contexts//ChallengesContext"
import styles from "../../../styles/components/Container.module.css";

export function Container({ children }) {
  const { dark } = useContext(ChallengesContext);

  return (
    <div className={`${styles.containerPrincipal} ${dark && styles.darkTheme}`}>
      {children}
    </div>
  )
}