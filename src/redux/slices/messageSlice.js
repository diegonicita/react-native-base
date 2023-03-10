import { createSlice } from "@reduxjs/toolkit"

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Initial message",
    player: null,
    club: null,
    myClub: null,
    login: null,
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
    onSetLogin(state, action) {
      state.login = action.payload
    }
  }
})

export const { onSetMessage, onSetPlayer, onSetClub, onSetMyClub, onSetLogin } = messageSlice.actions