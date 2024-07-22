import { BaseService } from "./BaseService";
import { PatientRecord } from "@/types/PatientRecord";

export const PatientService = BaseService.injectEndpoints({
  endpoints: (builder) => ({
    getPatientRecords: builder.query<PatientRecord[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPatientRecordsQuery } = PatientService;
