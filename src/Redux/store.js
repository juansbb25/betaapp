import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsReducer";
export default configureStore({
  reducer: {
    events: eventsReducer,
  },
});
