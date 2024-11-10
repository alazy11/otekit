
"use client";
import { FC, useState } from "react";
import React from "react";
import FormGroup from "./FormGroup";


const FormGroupLang = ({
    en,
    ar,
    enValue,
    arValue,
    // enHandleChange,
    handleChange,
    label,
    type,
    accept,
    disabled,
    form,
    min,
    max,
    minLength,
    maxLength,
    placeholder,
    readonly,
    required,
    step,

}) => {
  const [lang, setLang] = useState('en');

  return (
    <>
    {
    lang === "en" ?
    <FormGroup
    label={label}
    lang={"en"}
    id={en.id}
    type={type}
    accept={accept}
    disabled={disabled}
    form={form}
    min={min}
    max={max}
    minLength={minLength}
    maxLength={maxLength}
    name={en.name}
    pattern={en.pattern}
    placeholder={placeholder}
    readonly={readonly}
    required={required}
    step={step}
    value={enValue}
    handleChange={handleChange}
    >
    <div className="">
          <div className="w-full grid grid-cols-2 p-0.5 rounded-md isolate border border-solid border-[var(--bs-input-border-color)] relative bg-transparent">

            <div className="absolute top-0.5 bottom-0.5 right-0.5 left-0.5"
            >
              <div className={`w-1/2 h-full rounded bg-[var(--main-color)] ${lang === "en" ? 'ms-0' : 'ms-[50%]'}`}
              ></div>
            </div>

            <button type="button" className={`flex items-center relative justify-center gap-1 border-0 rounded text-xs leading-[1] font-medium py-1 px-2 ${lang === "en" ? "text-white" : "text-[#5d7186]"}`} onClick={(e) => {
              setLang("en")
            }}>
              en
            </button>
            <button type="button" className={`flex items-center relative justify-center gap-1 border-0 rounded text-xs leading-[1] font-medium py-1 px-2 ${lang === "ar" ? "text-white" : "text-[#5d7186]"}`} onClick={(e) => {
              setLang("ar")
            }}>
              ar
            </button>
          </div>
        </div>
    </FormGroup> : 
    <FormGroup
    
    label={label}
    id={ar.id}
    lang={"ar"}
    type={type}
    accept={accept}
    disabled={disabled}
    form={form}
    min={min}
    max={max}
    minLength={minLength}
    maxLength={maxLength}
    name={ar.name}
    pattern={ar.pattern}
    placeholder={placeholder}
    readonly={readonly}
    required={required}
    step={step}
    value={arValue}
    handleChange={handleChange}
    >
        <div className="">
              <div className="w-full grid grid-cols-2 p-0.5 rounded-md isolate border border-solid border-[var(--bs-input-border-color)] relative bg-transparent">
    
                <div className="absolute top-0.5 bottom-0.5 right-0.5 left-0.5"
                >
                  <div className={`w-1/2 h-full rounded bg-[var(--main-color)] ${lang === "en" ? 'ms-0' : 'ms-[50%]'}`}
                  ></div>
                </div>
    
                <button type="button" className={`flex items-center relative justify-center gap-1 border-0 rounded text-xs leading-[1] font-medium py-1 px-2 ${lang === "en" ? "text-white" : "text-[#5d7186]"}`} onClick={(e) => {
                  setLang("en")
                }}>
                  en
                </button>
                <button type="button" className={`flex items-center relative justify-center gap-1 border-0 rounded text-xs leading-[1] font-medium py-1 px-2 ${lang === "ar" ? "text-white" : "text-[#5d7186]"}`} onClick={(e) => {
                  setLang("ar")
                }}>
                  ar
                </button>
              </div>
            </div>
    </FormGroup>
    }
    </>
  );
};
export default FormGroupLang;
