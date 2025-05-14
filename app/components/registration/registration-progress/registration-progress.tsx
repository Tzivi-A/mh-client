import { Progress } from '@ui/progress/progress';
import { registrationStepsMapper } from '~/mappers/registration/registration-progress-mapper';

interface RegistrationProgressProps {
  currentStep: number;
}

export const RegistrationProgress = ({ currentStep }: RegistrationProgressProps) => {
  return <Progress steps={registrationStepsMapper} currentStep={currentStep} />;
};

export default RegistrationProgress;