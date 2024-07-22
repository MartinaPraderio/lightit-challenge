import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        required
        {...props}
      />
    </div>
  );
}
