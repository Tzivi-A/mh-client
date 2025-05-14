import { useState } from 'react';
import { RegistrationProgress } from '~/components/registration/registration-progress/registration-progress';
import MHHeader from '~/components/mh-header/mh-header';
import Section from '@ui/section/section';
import RegistrationForm from '~/components/registration/registration-form/registration-form';
import { StepWizard, type Step } from '@ui/step-wizard/step-wizard';

export const RegistrationPage = () => {
  const [currentStep] = useState(0);

  const steps: Step[] = [
    {
      id: 1,
      title: 'פרטי המועמד והתמודדות',
      component: <RegistrationForm />
    },
    {
      id: 2,
      title: 'פרטי הסיעה והבנק',
      component: <div>Step 2 Content</div>
    },
    {
      id: 3,
      title: 'פרטי איש קשר',
      component: <div>Step 3 Content</div>
    },
    {
      id: 4,
      title: 'אישור פרטים',
      component: <MHHeader title="Step 4" isLink={false}/>
    }
  ];

  return (
    <div>
      <MHHeader title="מערכת לניהול חשבונות" isLink={false} />
      <Section header="טופס פניית מועמד לתחילת דיווח">
        <RegistrationProgress currentStep={currentStep + 1} />
        <StepWizard steps={steps} initialStep={currentStep} />
      </Section>
    </div>
  );
};