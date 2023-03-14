import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Initial message',
    player: null,
    club: null,
    myClub: null,
    myPlayer: null,
    isLogged: null,
    userCounter: null,
    userLogged: null,
  },
  reducers: {
    onSetMessage(state, action) {
      state.message = action.payload
    },
    onSetPlayer(state, action) {
      state.player = action.payload
    },
    onSetClub(state, action) {
      state.club = action.payload
    },
    onSetMyClub(state, action) {
      state.myClub = action.payload
    },
    onSetMyPlayer(state, action) {
      state.myPlayer = action.payload
    },
    onSetIsLogged(state, action) {
      state.isLogged = action.payload
    },
    onSetUserCounter(state, action) {
      state.userCounter = action.payload
    },
    onSetUserLogged(state, action) {
      state.userLogged = action.payload
    }
  }
})

export const {
  onSetMessage,
  onSetPlayer,
  onSetClub,
  onSetMyClub,
  onSetMyPlayer,
  onSetIsLogged,
  onSetUserCounter,
  onSetUserLogged
} = messageSlice.actions
