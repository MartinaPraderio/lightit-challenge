import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PatientRecord } from "@/types/PatientRecord";
import Card from "@/components/Card";
import Loading from "@/components/shared/Loading";
import Error from "@/components/shared/Error";
import { RootState } from "@/store/store";
import { useGetPatientRecordsQuery } from "@/store/services/PatientService";
import { setPatients } from "@/store/slices/PatientsSlice";


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
    return <Error title="Error loading patients records" />;
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
