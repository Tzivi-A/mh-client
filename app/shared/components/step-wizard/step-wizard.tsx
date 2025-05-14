import { useState } from 'react';
import { Button } from '@ui/button/button';
import { Flex } from '@ui/layout/flex/flex';
import type { Step } from '@app-types/step-type';
import styles from './step-wizard.module.css';

interface StepWizardProps {
  steps: Step[];
  initialStep?: number;
  onStepChange?: (step: number) => void;
}

export const StepWizard = ({ steps, initialStep = 0, onStepChange }: StepWizardProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      onStepChange?.(nextStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      onStepChange?.(prevStep);
    }
  };

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <Flex direction="column">
      <div className={styles.content}>{steps[currentStep].component()}</div>
      <Flex justify="flex-end" className={styles.buttons}>
        <Flex gap="20px">
          {!isFirstStep && (
            <Button onClick={handleBack} variant="text" style="default" type="button">
              חזרה
            </Button>
          )}
          {isLastStep ? (
            <Button type="button">סיום</Button>
          ) : (
            <Button onClick={handleNext} type="button">
              המשך
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StepWizard;