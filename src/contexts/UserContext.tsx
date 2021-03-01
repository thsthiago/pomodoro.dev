import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';

interface UserContextData {
  nome: string;
  userGithub: (user: string) => void;
  setUsuario: ({}) => void;
}

interface UserProviderProps {
  children: ReactNode;
  nome: string;
  avatar: string;
  theme: number;
  login: string;
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children, ...rest }: UserProviderProps) {
  const [usuario, setUsuario] = useState({nome: rest.nome, avatar: rest.avatar, login: rest.login} ?? {nome: "", avatar: "",login: ""});
  const { nome } = usuario;

  const userGithub = (user) => axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      setUsuario({
        nome: res.data.name,
        avatar: res.data.avatar_url,
        login: res.data.login
      })
      
      return res.status;
    })
    .catch((e) => {})

  useEffect(() => {
    Cookies.set('nome', String(usuario.nome))
    Cookies.set('avatar', String(usuario.avatar))
    Cookies.set('login', String(usuario.login))
  }, [usuario])

  return (
    <UserContext.Provider value={{
      nome,
      setUsuario,
      userGithub,
    }}>
      {children}
    </UserContext.Provider>
  )
}