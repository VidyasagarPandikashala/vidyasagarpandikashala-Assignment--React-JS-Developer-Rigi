import { configureStore } from "@reduxjs/toolkit";
import databaseReducer from "../../src/utilityFunction/appSlice";

export default configureStore({
  reducer: {
    database: databaseReducer,
  },
});
