import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import patientsReducer from "./slices/PatientsSlice";
import { PatientService } from "./services/PatientService";
import { BaseService } from "./services/BaseService";

const store = configureStore({
  reducer: {
    patients: patientsReducer,
    [BaseService.reducerPath]: BaseService.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(BaseService.middleware, PatientService.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
