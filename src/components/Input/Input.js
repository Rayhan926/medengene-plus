import { FaEye, FaEyeSlash } from "react-icons/fa";

import { cx } from "@config/constants";
import React, { useId, useRef, useState } from "react";

const Input = ({ id, label, className = "", ...props }) => {
  const inputId = useId();

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="block text-dark-700 mb-3">
          {label}
        </label>
      )}
      <div className="relative">
        <input id={inputId} className={`${className} __input`} {...props} />
      </div>
    </div>
  );
};

export default Input;
