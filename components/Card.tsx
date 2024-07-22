/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { PatientRecord } from "@/types/PatientRecord";
import arrowDown from "@/assets/arrowDown.svg";
import arrowUp from "@/assets/arrowUp.svg";
import edit from "@/assets/edit.svg";
import EditModal from "./EditModal";
import { updatePatient } from "@/store/slices/PatientsSlice";

const Card = ({ dataCard }: { dataCard: PatientRecord }) => {
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
      <div className="p-4">
        {dataCard?.avatar && (
          <div className="flex justify-center mb-4">
            <Image
              src={dataCard.avatar}
              alt={dataCard.name}
              className="rounded-full object-cover"
              width={128}
              height={128}
            />
          </div>
        )}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white h-14">
          {dataCard?.name}
        </h1>
        <div className="mt-3">
          <Link href={dataCard?.website}>Visit Website</Link>
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
      </div>
      <EditModal
        isOpen={showModal}
        onRequestClose={closeModal}
        patientData={dataCard}
        onSave={handleEdit}
        isEdit={true}
      />
    </li>
  );
};

export default Card;
