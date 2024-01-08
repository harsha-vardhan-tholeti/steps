import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Step from "./components/step/Step";

const contentArray = ["Learn React", "Apply for Jobs", "Invest new income"];

function App() {
  const [step, setStep] = useState(1);

  const prevStep = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  };

  const nextStep = () => {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/3 h-2/5 bg-[#F7F7F7] rounded-lg flex flex-col justify-evenly">
        <div className="flex justify-around">
          <Step step={1} active={step >= 1 ? true : false} />
          <Step step={2} active={step >= 2 ? true : false} />
          <Step step={3} active={step >= 3 ? true : false} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">STEP {step}</h1>
          <p className="text-3xl font-semibold">{contentArray[step - 1]}</p>
        </div>
        <div className="flex justify-between">
          <Button
            text="prev"
            onClick={prevStep}
            active={step > 1 ? true : false}
          />
          <Button
            text="next"
            onClick={nextStep}
            active={step < 3 ? true : false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
