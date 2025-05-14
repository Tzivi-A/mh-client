import { useState } from 'react';
import { RegistrationProgress } from '~/components/registration/registration-progress/registration-progress';
import MHHeader from '~/components/mh-header/mh-header';

export const RegistrationPage = () => {
  const [currentStep] = useState(1);

  return (
    <div>
      <MHHeader title="רישום מועמד" isLink={true} />
      <RegistrationProgress currentStep={currentStep} />
      {/* Registration form components will be added here */}
    </div>
  );
};
