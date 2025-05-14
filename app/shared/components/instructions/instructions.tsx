import { ReactNode, useState } from 'react';
import { Button } from '@ui/button/button';
import { Flex } from '@ui/layout/flex/flex';
import styles from './instructions.module.css';

export interface Step {
  id: number;
  title: string;
  component: ReactNode;
}

interface InstructionsProps {
  steps: Step[];
  initialStep?: number;
}

export const Instructions = ({ steps, initialStep = 0 }: InstructionsProps) => {
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

  return (
    <div className={styles.instructions}>
      <div className={styles.content}>{steps[currentStep].component}</div>
      <Flex justify="space-between" className={styles.buttons}>
        <Button onClick={handleBack} variant="text" style="default" type="button">
          חזרה
        </Button>
        <Button onClick={handleNext} type="button">
          המשך
        </Button>
      </Flex>
    </div>
  );
};

export default Instructions;