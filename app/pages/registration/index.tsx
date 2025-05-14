import { useState } from 'react';
import { RegistrationProgress } from '~/components/registration/registration-progress/registration-progress';
import MHHeader from '~/components/mh-header/mh-header';

export const RegistrationPage = () => {
  const [currentStep] = useState(2);

  return (
    <div>
      <MHHeader title="רישום מועמד" isLink={false} />
      <RegistrationProgress currentStep={currentStep} />
      {/* Registration form components will be added here */}
    </div>
  );
};
