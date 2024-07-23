import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { PatientRecord } from "@/types/PatientRecord";
import Input from "./shared/Input";
import Button from "./shared/Button";

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  patientData?: PatientRecord;
  // eslint-disable-next-line no-unused-vars
  onSave: (updatedRecord: PatientRecord) => void;
  isEdit: boolean;
}

const PatientModal: React.FC<EditModalProps> = ({ isOpen, onRequestClose, patientData, onSave, isEdit }) => {
  const [name, setName] = useState(patientData?.name || "");
  const [description, setDescription] = useState(patientData?.description || "");
  const [website, setWebsite] = useState(patientData?.website || "");
  const [avatar, setAvatar] = useState(patientData?.avatar || "");
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    website: "",
    avatar: "",
  });

  useEffect(() => {
    if (isOpen && patientData) {
      setName(patientData.name);
      setDescription(patientData.description);
      setWebsite(patientData.website);
      setAvatar(patientData.avatar);
    }
  }, [isOpen, patientData]);

  const resetValues = () => {
    setName("");
    setDescription("");
    setWebsite("");
    setAvatar("");
    setErrors({
      name: "",
      description: "",
      website: "",
      avatar: "",
    });
  };

  const handleClose = () => {
    resetValues();
    onRequestClose();
  };

  const handleSave = () => {
    if (validateForm()) {
      const updatedRecord = {
        ...patientData,
        id: patientData?.id || uuidv4(),
        name,
        description,
        avatar,
        website,
      };
      onSave(updatedRecord);
      toast.success(`${isEdit ? "Patient Record Updated" : "Patient Record Created"} successfully!`, {
        autoClose: 3000,
      });
      handleClose();
    } else {
      toast.error("Please correct the errors in the form", {
        autoClose: 3000,
      });
    }
  };

  const isValidUrl = (url: string) => {
    const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[a-z]{2,6}(\/[\w\d-_.~:?#[@!$&'()*+,;=]*)?$/i;
    return urlPattern.test(url);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", description: "", avatar: "", website: "" };

    if (!name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!description) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    if (!avatar.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg|svg)/g)) {
      newErrors.avatar = "Avatar URL is invalid";
      isValid = false;
    }

    if (!isValidUrl(website)) {
      newErrors.website = "Website URL is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const newErrors = { ...errors };
    switch (id) {
      case "name":
        setName(value);
        if (value) newErrors.name = "";
        break;
      case "description":
        setDescription(value);
        if (value) newErrors.description = "";
        break;
      case "avatar":
        setAvatar(value);
        if (value) newErrors.avatar = "";
        break;
      case "website":
        setWebsite(value);
        if (value) newErrors.website = "";
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={isEdit ? "Edit Patient Record" : "Create Patient Record"}
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl mb-4 text-gray-700">{isEdit ? "Edit Patient Record" : "Create Patient Record"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input id="name" type="text" label="Name" value={name} onChange={handleInputChange} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <Input id="avatar" type="text" label="Avatar URL" value={avatar} onChange={handleInputChange} />
            {errors.avatar && <p className="text-red-500 text-sm">{errors.avatar}</p>}
          </div>
          <div className="mb-4">
            <Input id="website" type="text" label="Website" value={website} onChange={handleInputChange} />
            {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="mb-2 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleInputChange}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              rows={5}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          <div className="flex justify-end">
            <Button onClick={handleClose} variant="info" label="Cancel" />
            <Button onClick={handleSubmit} label={isEdit ? "Save" : "Create"} variant="primary" />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PatientModal;
