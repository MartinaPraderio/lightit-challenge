import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatientRecord } from "@/types/PatientRecord";

interface PatientsState {
  records: PatientRecord[];
}

const initialState: PatientsState = {
  records: [],
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
      const index = state.records.findIndex(patient => patient.id === action.payload.id);
      if (index !== -1) {
        state.records[index] = action.payload;
      }
    },
  },
});

export const { setPatients, addPatient, updatePatient } = PatientsSlice.actions;

export default PatientsSlice.reducer;
