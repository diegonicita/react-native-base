import { useDispatch, useSelector } from 'react-redux'
import {
  onSetMessage,
  onSetPlayer,
  onSetClub,
  onSetMyClub,
  onSetMyPlayer,
  onSetLogin,
  onSetUserCounter
} from '../slices'

export const useMessageStore = () => {
  const { message, player, club, myClub, login, userCounter, myPlayer } =
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
  const setLogin = (msg) => {
    dispatch(onSetLogin(msg))
  }
  const setUserCounter = (msg) => {
    dispatch(onSetUserCounter(msg))
  }

  return {
    //* Propiedades
    message,
    player,
    club,
    myClub,
    myPlayer,
    login,
    userCounter,
    //* Métodos
    setMessage,
    setPlayer,
    setClub,
    setMyClub,
    setMyPlayer,
    setLogin,
    setUserCounter
  }
}