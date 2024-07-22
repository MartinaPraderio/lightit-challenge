import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PatientRecord } from "@/types/PatientRecord";
import logoBlue from "@/assets/heartPulseLogo.svg";
import { Button } from "@/components/shared/Button";
import EditModal from "./EditModal";
import { RootState } from "@/store/store";
import { addPatient } from "@/store/slices/PatientsSlice";

export default function Header() {
  const patients = useSelector((state: RootState) => state.patients.records);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCreate = (newRecord: PatientRecord) => {
    dispatch(addPatient(newRecord));
    closeModal();
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
        <Button variant="primary" label="ADD PATIENT +" onClick={openModal} />
      </nav>
      <EditModal
        isOpen={showModal}
        onRequestClose={closeModal}
        onSave={handleCreate}
        isEdit={false}
      />
    </header>
  );
}
