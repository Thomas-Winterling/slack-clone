import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    roomdId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomdId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId  = (state) => state.app.roomId;


export default appSlice.reducer;
