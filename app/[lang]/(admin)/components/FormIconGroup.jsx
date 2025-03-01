"use client";
import { FC, useState } from "react";
import React from "react";



const validation = (e, setIsValid, setErrorMessage) => {
  let element = e.currentTarget;
  if (element.validity.valueMissing && element.value.trim() === '') {
    console.log(element.value);
    setIsValid(false);
    setErrorMessage("you missing value");
    element.setCustomValidity("you missing value");
  } else if (element.validity.typeMismatch) {
    element.setCustomValidity("enter correct value");
    setIsValid(false);
    setErrorMessage("enter correct value");
  } else {
    element.setCustomValidity("");
    setIsValid(true);
    setErrorMessage("");
  }
};

const FormIconGroup = ({
  label,
  // errorMessage,
  id,
  type,
  accept,
  disabled,
  form,
  min,
  max,
  minLength,
  maxLength,
  name,
  pattern,
  placeholder,
  readonly,
  required,
  step,
  value,
  handleChange,
  lang,
  children
}) => {
  const [hide, setHide] = useState(type);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(
    "set the correct value!",
  );
  const [language, setLanguage] = useState('en');

  return (
    <div className="w-full grid grid-cols-1 gap-2 content-start">
      <div className="flex items-center justify-between gap-3">
        <label
          htmlFor={id}
          className="font-medium text-sm text-[#5d7186] capitalize"
        >
          {label}
        </label>
      </div>

      <div className="w-full relative">
        
        <div className="w-full flex items-center">
            <span className="flex items-center justify-center py-2 px-4 text-[#5d7186] bg-[#f8f9fa] border border-solid
            border-[#d8dfe7] rounded-ss-lg rounded-es-lg border-e-0
            ">
{
          children
        }

            </span>
        <input
              className={`w-full py-2 px-4 ${type == "password" ? "pe-[50px]" : ""} rounded-se-lg rounded-ee-lg border border-solid border-[var(--bs-input-border-color)] outline-0 transition-colors
        font-normal leading-[1.5] text-[#5d7186] text-sm focus:border-[var(--bs-input-focus-border-color)] placeholder:text-[var(--font-placeholder-color)]
        check-validity
        `}
              id={id}
              type={hide}
              data-lang={lang}
              value={value}
              placeholder={placeholder}
              required={required}
              name={name}
              onChange={(e) => {
                setIsValid(true);
                setErrorMessage("");
                handleChange(e);
              }}
              aria-describedby={id + "error-message"}
              onBlur={(e) => {
                console.log("blur")
                validation(e, setIsValid, setErrorMessage);
              }}
              onInvalid={(e) => {
                console.log("error message");
              }}
            />
        </div>

        {!isValid && (
          <div
            aria-live="polite"
            className="text-xs text-red-500 mt-2 family-primary font-medium"
            id={id + "error-message"}
          >
            {errorMessage}
          </div>
        )}
        {type === "password"
          ? value?.trim().length > 0 && (
            <button
              className="absolute right-[15px] top-1/2 -translate-y-1/2 family-primary capitalize font-medium font-t2 font-accent-primary"
              onClick={(e) => {
                e.preventDefault();
                // console.log(hide);
                if (hide === "password") setHide("text");
                else setHide("password");
              }}
            >
              {hide === "password" ? "Show" : "Hide"}
            </button>
          )
          : ""}
      </div>
    </div>
  );
};
export default FormIconGroup;
