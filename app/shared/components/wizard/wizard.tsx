import { Progress, type ProgressStep } from '@ui/progress/progress';
import { StepWizard } from '@ui/step-wizard/step-wizard';
import type { Step } from '@app-types/step-type';

interface WizardProps {
  progressSteps: ProgressStep[];
  wizardSteps: Step[];
  initialStep?: number;
}

export const Wizard = ({ progressSteps, wizardSteps, initialStep = 0 }: WizardProps) => {
  return (
    <>
      <Progress steps={progressSteps} currentStep={initialStep + 1} />
      <StepWizard steps={wizardSteps} initialStep={initialStep} />
    </>
  );
};

export default Wizard;
