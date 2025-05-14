import { ReactNode, useState } from 'react';
import { Button } from '@ui/button/button';
import { Flex } from '@ui/layout/flex/flex';
import styles from './step-wizard.module.css';

export interface Step {
  id: number;
  title: string;
  component: ReactNode;
}

interface StepWizardProps {
  steps: Step[];
  initialStep?: number;
}

export const StepWizard = ({ steps, initialStep = 0 }: StepWizardProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <Flex direction="column">
      <div className={styles.content}>{steps[currentStep].component}</div>
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
    </div>
  );
};

export default StepWizard;