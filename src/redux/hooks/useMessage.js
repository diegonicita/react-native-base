import { useDispatch, useSelector } from 'react-redux'
import {
  onSetMessage,
  onSetPlayer,
  onSetClub,
  onSetMyClub,
  onSetMyPlayer,
  onSetIsLogged,
  onSetUserCounter,
  onSetUserLogged,
} from '../slices'

export const useMessageStore = () => {
  const { message, player, club, myClub, isLogged, userCounter, myPlayer, userLogged } =
    useSelector((state) => state.message)
  const dispatch = useDispatch()

  const setMessage = (msg) => {
    dispatch(onSetMessage(msg))
  }
  const setPlayer = (msg) => {
    dispatch(onSetPlayer(msg))
  }
  const setClub = (msg) => {
    dispatch(onSetClub(msg))
  }
  const setMyClub = (msg) => {
    dispatch(onSetMyClub(msg))
  }
  const setMyPlayer = (msg) => {
    dispatch(onSetMyPlayer(msg))
  }
  const setIsLogged = (msg) => {
    dispatch(onSetIsLogged(msg))
  }
  const setUserCounter = (msg) => {
    dispatch(onSetUserCounter(msg))
  }

  const setUserLogged = (msg) => {
    dispatch(onSetUserLogged(msg))
  }

  return {
    //* Propiedades
    message,
    player,
    club,
    myClub,
    myPlayer,
    isLogged,
    userCounter,
    userLogged,
    //* Métodos
    setMessage,
    setPlayer,
    setClub,
    setMyClub,
    setMyPlayer,
    setIsLogged,
    setUserCounter,
    setUserLogged
  }
}
