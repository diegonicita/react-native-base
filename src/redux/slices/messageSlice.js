import { createSlice } from "@reduxjs/toolkit"

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Initial message",
    player: null,
    club: null,
    myClub: [ 529, 'Barcelona', 'https://media.api-sports.io/football/teams/529.png'],
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
    }
  }
})

export const { onSetMessage, onSetPlayer, onSetClub, onSetMyClub } = messageSlice.actions