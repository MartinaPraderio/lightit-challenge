import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { PatientRecord } from "@/types/PatientRecord";
import arrowDown from "@/assets/arrowDown.svg";
import arrowUp from "@/assets/arrowUp.svg";
import edit from "@/assets/edit.svg";
import PatientModal from "./PatientModal";
import BaseCard from "./shared/Card";
import { updatePatient } from "@/store/slices/PatientsSlice";

const PatientCard = ({ dataCard }: { dataCard: PatientRecord }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEdit = (updatedRecord: PatientRecord) => {
    dispatch(updatePatient(updatedRecord));
    closeModal();
  };

  return (
    <li key={dataCard?.id} className="record-item">
      <BaseCard avatar={dataCard?.avatar} name={dataCard?.name}>
        <div className="mt-3">
          <Link href={dataCard?.website} className="hover:text-gray-700">
            Visit Website
          </Link>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button onClick={toggleDetails}>
            <Image
              src={showDetails ? arrowUp : arrowDown}
              alt={showDetails ? "Hide Details" : "Show Details"}
              width={24}
              height={24}
            />
          </button>
          <div className="ml-auto">
            <button>
              <Image
                src={edit}
                alt="Edit"
                width={24}
                height={24}
                onClick={openModal}
              />
            </button>
          </div>
        </div>
        {showDetails && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-left">Description</h2>
            <p className="text-justify mt-2">{dataCard?.description}</p>
          </div>
        )}
      </BaseCard>
      <PatientModal
        isOpen={showModal}
        onRequestClose={closeModal}
        patientData={dataCard}
        onSave={handleEdit}
        isEdit={true}
      />
    </li>
  );
};

export default PatientCard;
