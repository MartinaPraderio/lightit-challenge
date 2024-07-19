/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { PatientRecord } from "@/types/PatientRecord";
import Link from "next/link";
import Image from "next/image";
import arrowDown from "../assets/arrowDown.svg";
import arrowUp from "../assets/arrowUp.svg";
import edit from "../assets/edit.svg";

const Card = ({ dataCard }: { dataCard: PatientRecord }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li key={dataCard?.id} className="record-item">
      <div className="p-4">
        {dataCard?.avatar && (
          <div className="flex justify-center mb-4">
            <img
              src={dataCard.avatar}
              alt={dataCard.name}
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        )}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {dataCard?.name}
        </h1>
        <div className="mt-3">
          <Link href={dataCard?.website}>Visit Website</Link>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={toggleDetails}
            className="text-indigo-600 dark:text-indigo-400"
          >
            <Image
              src={showDetails ? arrowUp : arrowDown}
              alt={showDetails ? "Hide Details" : "Show Details"}
              width={24}
              height={24}
            />
          </button>
          <div className="ml-auto">
            <button>
              <Image src={edit} alt="Edit" width={24} height={24} />
            </button>
          </div>
        </div>
        {showDetails && (
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-300">
              {dataCard?.description}
            </p>
          </div>
        )}
      </div>
    </li>
  );
};

export default Card;
