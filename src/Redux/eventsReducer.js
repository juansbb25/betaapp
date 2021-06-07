import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    eventBalls: false,
  },
  reducers: {
    InitEventBalls: (state) => {
      state.eventBalls = true;
    },
    FinishEventBalls: (state) => {
      state.eventBalls = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { InitEventBalls, FinishEventBalls } = eventsSlice.actions;

export default eventsSlice.reducer;
