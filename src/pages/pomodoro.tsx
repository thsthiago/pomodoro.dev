import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ExperienceBar } from '../components/Inicial/components/ExperienceBar';
import { Profile } from '../components/Inicial/components/Profile';
import { CompletedChallenges } from '../components/Inicial/components/CompletedChallenges';
import { Countdown } from '../components/Inicial/components/Countdown';
import { ChallengeBox } from '../components/Inicial/components/ChallengeBox';

import styles from '../styles/pages/Pomodoro.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Container } from '../components/Inicial/components/Container';
import { Navbar } from '../components/Inicial/components/Navbar';
import { Warning } from '../components/Inicial/components/Warning';
import { RegisterUser } from '../components/Inicial/components/RegisterUser';

interface PomodoroProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  theme: number;
  nome: string;
  avatar: string;
  login: string;
}

export default function Pomodoro(props: PomodoroProps) { 
  
  
  return props.nome === "undefined" 
  ? (
    <RegisterUser /> 
  )
  : (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
      theme={props.theme}
      nome={props.nome}
      avatar={props.avatar}
    >
      <Container>
        <Warning />
        <Navbar />
        <div className={styles.container}>
          <Head>
            <title>Início | pomodoro.dev</title>
          </Head>
          
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div className={styles.profile}>
                <Profile nome={props.nome} avatar={props.avatar} login={props.login}/>
                <CompletedChallenges />
                <Countdown />
              </div>
              <div className={styles.challenge}>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { 
    level, 
    currentExperience, 
    challengesCompleted, 
    theme,
    nome, 
    avatar,
    login
  } = context.req.cookies;
  
  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted),
      theme: Number(theme),
      nome: String(nome),
      avatar: String(avatar),
      login: String(login)
    }
  }
}