import { useState } from 'react';
import { registrationStepsMapper } from '~/mappers/registration/registration-progress-mapper';
import MHHeader from '~/components/mh-header/mh-header';
import Section from '@ui/section/section';
import type { Step } from '@app-types/step-type';
import RegistrationForm from '~/components/registration/registration-form/registration-form';
import PartyDetails from '~/components/registration/party-details/party-details';
import ContactDetails from '~/components/registration/contact-details/contact-details';
import Approval from '~/components/registration/approval/approval';
import { Wizard } from '@ui/wizard/wizard';

export const RegistrationPage = () => {
  const [currentStep] = useState(1);

  const steps: Step[] = [
    {
      id: 1,
      title: 'פרטי המועמד והתמודדות',
      component: () => <RegistrationForm />
    },
    {
      id: 2,
      title: 'פרטי הסיעה והבנק',
      component: () => <PartyDetails />
    },
    {
      id: 3,
      title: 'פרטי איש קשר',
      component: () => <ContactDetails />
    },
    {
      id: 4,
      title: 'אישור פרטים',
      component: () => <Approval />
    }
  ];

  return (
    <div>
      <MHHeader title="מערכת לניהול חשבונות" isLink={false} />
      <Section header="טופס פניית מועמד לתחילת דיווח">
        <Wizard
          progressSteps={registrationStepsMapper}
          wizardSteps={steps}
          initialStep={currentStep}
        />
      </Section>
    </div>
  );
};
