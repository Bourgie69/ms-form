"use client";
import Image from "next/image";
import "./index.css";
import { useState, useEffect } from "react";

import Step1 from "./_features/step1";
import Step2 from "./_features/step2";
import Step3 from "./_features/step3";

import { validateFirst, validateSecond, validateThird } from "./_utils/validation";

export default function Home() {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      date:'',
      file:null
    });

    const [errors, setErrors] = useState({
      firstName: false,
      lastName: false,
      userName: false,
      email: false,
      phone: false,
      password: false,
      confirmPassword: false,
      date:false,
      file: null
    });

    useEffect(() => {
      const saved = localStorage.getItem('formData');
      const savedStep = localStorage.getItem('step')
      if(saved){
        setFormData(JSON.parse(saved))
        // setFormData((prev) => ({...prev, password:''}))
        // setFormData((prev) => ({...prev, confirmPassword:''}))
        setFormData((prev) => ({...prev, file:null}))
        
      }
      if(savedStep){
        const currentStep = JSON.parse(savedStep)
        currentStep === 4 ? setStep(1): setStep(currentStep)
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('formData', JSON.stringify(formData))
      localStorage.setItem('step', JSON.stringify(step))
    }, [formData, step])


  const stepForward = () => {
    step === 1 ? validateFirst(formData, setErrors, step, setStep) : 
    step === 2 ? validateSecond(formData, setErrors, step, setStep) :
    validateThird(formData, setErrors, step, setStep)
  }

  const stepBack = () => setStep(step - 1);

  return (
    <div>
      <div className="main-container">
        <div className="top">
          <Image src="/main.png" width={60} height={60} alt="Picture" />

          <p className="top-text"
          >{ step !== 4 ? 'Join Us! 😎': 
          "You're All Set 🔥"}</p>

          <p style={{ opacity: "0.5" }}
          >{ step !== 4 ?'Please provide all current information accurately.': 
          'We have received your submission. Thank you!'}</p>

        </div>

        <div className="form-container">
          {step === 1 && (
            <Step1
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          />
          )}

          {step === 2 && (
            <Step2
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            />)}

          {step === 3 && (
            <Step3
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}/>)}
        </div>

        <div className="bottom" 
          style={{display: step === 4 ? 'none' : 'flex'}}>
          <button
            className="btn white-btn"
            onClick={stepBack}
            style={{ display: step === 1 ? "none" : "flex" }}
          >
            &larr;Back
          </button>

          <button className="btn black-btn" onClick={stepForward}>
            {step !== 3 ? "Continue" : "Submit"} {step}/3&rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

