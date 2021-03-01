import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';

import { UserProvider } from '../contexts/UserContext';
import { LogoText } from '../components/Login/components/LogoText';
import LoginUser from '../components/Login/components/LoginUser';
import Button from '../components/Login/components/Button';
import { GetServerSideProps } from 'next';

interface UserProps {
  nome: string;
  avatar: string;
  theme: number;
  login: string;
}

export default function LoginUsuario (props: UserProps) {
  return(
    <UserProvider nome={props.nome} avatar={props.avatar} theme={props.theme} login={props.login}>
      <div className={`${styles.containerPricipal} ${props.theme ? styles.darkTheme : undefined}`}>
        <Head>
          <title>Login | pomodoro.dev</title>
        </Head>

        <div className={styles.container}>
          <img src="/logo-full.svg" alt="Logo-full" className={styles.logoFull}/>
          <div className={styles.form}>
            <LogoText />
            <h1>Bem-vindo(a)</h1>
            {props.nome !== 'undefined'? (
              <Button theme={props.theme} nome={props.nome}></Button>
            ): (
              <LoginUser theme={props.theme}/>
            )}
          </div>
        </div>
      </div>
    </UserProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { 
    nome, 
    avatar,
    theme,
    login
  } = context.req.cookies;
  
  return {
    props: {
      nome: String(nome),
      avatar: String(avatar),
      theme: Number(theme),
      login: String(login)
    }
  }
}