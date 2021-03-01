import { useState } from "react";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

import styles from '../../../styles/components/LoginUser.module.css';
import { UserContext } from "../../../contexts/UserContext";

export default function LoginUser ({...dist}) {
  const [state, setState] = useState("")
  const [stateGithub, setStateGithub] = useState("")
  const [userErro, setUserErro] = useState(false);
  const [userGithubErro, setGithubErro] = useState("");
  const { userGithub, setUsuario } = useContext(UserContext);

  function submitUserGithub(e) { 
    e.preventDefault();

    if(stateGithub === "") {
      setGithubErro("campoVazio")
      return;
    }

    Promise.resolve((userGithub(stateGithub))).then(res => {
      if(Number(res) === 200) {
        location.href = '/pomodoro';
      } else {
        setGithubErro("naoExiste");
      }
    }).catch((e) => {})
  }

  function submitUsername(e) {
    e.preventDefault();
    
    if(state === "") {
      setUserErro(true)
      return;
    }

    setUsuario({nome: state, avatar: ""})
    location.href = '/pomodoro';
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitUsername}>
        <input 
          type="text" 
          name="name" 
          placeholder={userErro ? "Esse campo não pode estar vazio" : "Username"}
          onChange={(e) => {setState(e.target.value)}}
          className={`${dist.theme ? styles.darkTheme : undefined} ${userErro ? styles.error : undefined}`}
        />
      
        <button type="submit">
          <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
        </button>
      </form>

      <strong><span></span>Ou<span></span></strong>
      
      <form onSubmit={submitUserGithub}>
        <input 
          type="text" 
          name="name" 
          placeholder="Username GitHub"
          onChange={(e) => {setStateGithub(e.target.value)}}
          className={dist.theme ? styles.darkTheme : undefined}
        />
      
        <button type="submit">
          <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
        </button>
        {
          userGithubErro === "campoVazio" 
          ?  <strong>Esse campo não pode estar vazio</strong>
          : userGithubErro === "naoExiste" &&
           <strong>Usuário não existe</strong>
        }
      </form>
    </div>
  )
}