import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatientRecord } from "@/types/PatientRecord";

interface PatientsState {
  records: PatientRecord[];
  status: "idle" | "loading" | "failed";
}

const initialState: PatientsState = {
  records: [],
  status: "idle",
};

const PatientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setPatients(state, action: PayloadAction<PatientRecord[]>) {
      state.records = action.payload;
    },
    addPatient(state, action: PayloadAction<PatientRecord>) {
      state.records.push(action.payload);
    },
    updatePatient(state, action: PayloadAction<PatientRecord>) {
      const index = state.records.findIndex(
        (patient) => patient.id === action.payload.id
      );
      if (index !== -1) {
        state.records[index] = action.payload;
      }
    },
    setStatus(state, action: PayloadAction<"idle" | "loading" | "failed">) {
      state.status = action.payload;
    },
  },
});

export const { setPatients, addPatient, updatePatient, setStatus } =
  PatientsSlice.actions;

export default PatientsSlice.reducer;
