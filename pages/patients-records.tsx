//import { getPatientRecords } from "./api/patient-records";
import { useEffect, useState } from "react";
import { PatientRecord } from "../types/PatientRecord";
import Card from "../components/Card";
import Head from "next/head";
import { useGetPatientRecordsQuery } from "../store/services/PatientService";
import { setPatients } from "@/store/slices/PatientsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Loading from "@/components/Loading";

export default function PatientRecords(): JSX.Element {
  const { data: patients, error, isLoading } = useGetPatientRecordsQuery();
  const dispatch = useDispatch();
  const patientRecords = useSelector(
    (state: RootState) => state.patients.records
  );

  useEffect(() => {
    if (patients) {
      dispatch(setPatients(patients));
    }
  }, [patients, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading patients</div>;
  }

  return (
    <>
      <ul id="records">
        {patientRecords?.map((element: PatientRecord, i: number) => (
          <Card key={i} dataCard={element} />
        ))}
      </ul>
    </>
  );
}
