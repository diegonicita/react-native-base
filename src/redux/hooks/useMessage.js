import { useDispatch, useSelector } from 'react-redux'
import { onSetMessage, onSetPlayer, onSetClub, onSetMyClub, onSetLogin } from '../slices'

export const useMessageStore = () => {
  const { message, player, club, myClub, login } = useSelector((state) => state.message)
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

  const setLogin = (msg) => {
    dispatch(onSetLogin(msg))
  }  

  return {
    //* Propiedades
    message,
    player,
    club,
    myClub,
    login,
    //* Métodos
    setMessage,    
    setPlayer,
    setClub,
    setMyClub,
    setLogin
  }
}