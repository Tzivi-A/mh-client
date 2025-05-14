import { useState } from 'react';
import { RegistrationProgress } from '~/components/registration/registration-progress/registration-progress';
import MHHeader from '~/components/mh-header/mh-header';
import Section from '@ui/section/section';

export const RegistrationPage = () => {
  const [currentStep] = useState(2);

  return (
    <div>
      <MHHeader title="מערכת לניהול חשבונות" isLink={false} />
      <Section header="טופס פניית מועמד לחילת דיווח">
        <RegistrationProgress currentStep={currentStep} />
      </Section>
      {/* Registration form components will be added here */}
    </div>
  );
};
