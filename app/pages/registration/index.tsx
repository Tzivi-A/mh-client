import { useState } from 'react';
import { RegistrationProgress } from '~/components/registration/registration-progress/registration-progress';
import MHHeader from '~/components/mh-header/mh-header';
import Section from '@ui/section/section';
import RegistrationForm from '~/components/registration/registration-form/registration-form';

export const RegistrationPage = () => {
  const [currentStep] = useState(2);

  return (
    <div>
      <MHHeader title="מערכת לניהול חשבונות" isLink={false} />
      <Section header="טופס פניית מועמד לתחילת דיווח">
        <RegistrationProgress currentStep={currentStep} />
        <RegistrationForm />
      </Section>
    </div>
  );
};
