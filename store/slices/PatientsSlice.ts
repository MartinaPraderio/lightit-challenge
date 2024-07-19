// store/slices/PatientsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatientRecord } from "../../types/PatientRecord";

// Definir el estado inicial y el tipo de estado
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
    // Reducer para establecer la lista de pacientes
    setPatients(state, action: PayloadAction<PatientRecord[]>) {
      state.records = action.payload;
      console.log(action.payload, "action.payload");
    },
    // Reducer para agregar un paciente
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
    // Reducer para establecer el estado de carga
    setStatus(state, action: PayloadAction<"idle" | "loading" | "failed">) {
      state.status = action.payload;
    },
  },
});

export const { setPatients, addPatient, updatePatient, setStatus } =
  PatientsSlice.actions;

export default PatientsSlice.reducer;
