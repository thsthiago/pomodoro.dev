import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/Inicial/components/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  dark: number;
  signOut: boolean;
  levelUp: () => void,
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  activeDark: () => void;
  closeLevelUpModal: () => void;
  sair: () => void;
  apagarUser: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  theme: number;
  nome: string;
  avatar: string;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [signOut, setSignOut] = useState(false);

  const [dark, setDarkActive] = useState(rest.theme ?? 0);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
    Cookies.set('theme', String(dark))
  }, [level, currentExperience, challengesCompleted, dark])

  function sair() {
    if(signOut) {
      setSignOut(false);  
      return;
    }
    setSignOut(true);
  }

  function apagarUser() {
    Cookies.remove('avatar')
    Cookies.remove('nome')
    Cookies.remove('theme')
    Cookies.remove('level')
    Cookies.remove('challengesCompleted')
    Cookies.remove('currentExperience')
    Cookies.remove('login')
    sair();
  }

  function activeDark() {
    dark ? setDarkActive(0) : setDarkActive(1);
  };

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const rancomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[rancomChallengeIndex];
 
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }


  return (
    <ChallengesContext.Provider 
      value={{
        level, 
        currentExperience, 
        experienceToNextLevel,
        challengesCompleted, 
        dark,
        signOut,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        activeDark,
        closeLevelUpModal,
        sair,
        apagarUser,
      }}
    >
      {children}

      { isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}