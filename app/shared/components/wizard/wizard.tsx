import { useState } from 'react';
import { Progress, type ProgressStep } from '@ui/progress/progress';
import { StepWizard } from '@ui/step-wizard/step-wizard';
import type { Step } from '@app-types/step-type';

interface WizardProps {
  progressSteps: ProgressStep[];
  wizardSteps: Step[];
  initialStep?: number;
}

export const Wizard = ({ progressSteps, wizardSteps, initialStep = 1 }: WizardProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  return (
    <>
      <Progress steps={progressSteps} currentStep={currentStep} />
      <StepWizard
        steps={wizardSteps}
        initialStep={currentStep - 1}
        onStepChange={step => setCurrentStep(step + 1)}
      />
    </>
  );
};

export default Wizard;
