import { Suspense, lazy, useState } from 'react';
import { RegistrationProgress } from '~/components/registration/registration-progress/registration-progress';
import MHHeader from '~/components/mh-header/mh-header';
import Section from '@ui/section/section';
import { StepWizard } from '@ui/step-wizard/step-wizard';
import type { Step } from '~/types/registration/registration-step';

export const RegistrationPage = () => {
  const [currentStep] = useState(0);

  const steps: Step[] = [
    {
      id: 1,
      title: 'פרטי המועמד והתמודדות',
      component: () => import('~/components/registration/registration-form/registration-form')
    },
    {
      id: 2,
      title: 'פרטי הסיעה והבנק',
      component: () => import('~/components/registration/party-details/party-details')
    },
    {
      id: 3,
      title: 'פרטי איש קשר',
      component: () => import('~/components/registration/contact-details/contact-details')
    },
    {
      id: 4,
      title: 'אישור פרטים',
      component: () => import('~/components/registration/approval/approval')
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