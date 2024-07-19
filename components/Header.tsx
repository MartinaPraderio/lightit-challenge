import Image from "next/image";
import { Button } from "@/components/Button";
import logoBlue from "../assets/heartPulseLogo.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addPatient } from "@/store/slices/PatientsSlice";
import { useDispatch } from "react-redux";
import { PatientRecord } from "@/types/PatientRecord";

export default function Header() {
  const patients = useSelector((state: RootState) => state.patients.records);
  const dispatch = useDispatch();

  const handleAddPatient = () => () => {
    const newPatient: PatientRecord = {
      id: "9876543",
      name: "New Patient",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/563.jpg",
      description: "Description of new patient",
      website: "https://example.com",
    };
    dispatch(addPatient(newPatient));
  };
  return (
    <header id="main-header">
      <div id="title">
        <Image
          src={logoBlue}
          alt="Dualboot Partners Logo"
          width={60}
          height={60}
        />
        <h1>PATIENTS</h1>
        <p>{patients && ` (${patients.length})`}</p>
      </div>
      <nav>
        <Button
          variant="primary"
          label="Add Patient +"
          onClick={handleAddPatient()}
        />
      </nav>
    </header>
  );
}
