import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Initial message',
    player: null,
    club: null,
    myClub: null,
    myPlayer: null,
    login: null,
    userCounter: null
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
    onSetLogin(state, action) {
      state.login = action.payload
    },
    onSetUserCounter(state, action) {
      state.userCounter = action.payload
    }
  }
})

export const {
  onSetMessage,
  onSetPlayer,
  onSetClub,
  onSetMyClub,
  onSetMyPlayer,
  onSetLogin,
  onSetUserCounter
} = messageSlice.actions