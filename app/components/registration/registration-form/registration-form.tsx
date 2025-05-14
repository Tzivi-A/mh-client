import { Card } from '@ui/card/card';
import useAppForm from '@hooks/use-app-form';
import { Button } from '@ui/button/button';
import { isInputRequired } from '~/validators/common/requierd-validators';
import FormSection from '@ui/form-section/form-section';
import styles from './registration-form.module.css';

interface RegistrationFormValues {
  // Personal Details
  idNumber: string;
  firstName: string;
  lastName: string;
  // Contact Details
  email: string;
  isEmailConfirmed: boolean;
  // Address
  city: string;
  street: string;
  houseNumber: string;
  apartment: string;
  zipCode: string;
  // Phone Numbers
  primaryPhone: string;
  secondaryPhone: string;
}

export const RegistrationForm = () => {
  const form = useAppForm({
    defaultValues: {} as RegistrationFormValues,
    validators: {
      onChange: ({ value }) => {
        if (!value.firstName || !value.lastName || !value.idNumber) {
          return 'יש למלא את כל שדות החובה';
        }
      }
    },
    onSubmit: ({ value }) => {
      console.log('Form submitted:', value);
    }
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Card>
        <FormSection title="פרטים אישיים">
          <div className={styles['form-row']}>
            <form.AppField
              name="idNumber"
              validators={{
                onChange: ({ value }) => isInputRequired(value)
              }}
            >
              {field => <field.Input label="תעודת זהות" isRequired={true} />}
            </form.AppField>

            <form.AppField
              name="firstName"
              validators={{
                onChange: ({ value }) => isInputRequired(value)
              }}
            >
              {field => <field.Input label="שם פרטי" isRequired={true} />}
            </form.AppField>

            <form.AppField
              name="lastName"
              validators={{
                onChange: ({ value }) => isInputRequired(value)
              }}
            >
              {field => <field.Input label="שם משפחה" isRequired={true} />}
            </form.AppField>
          </div>
        </FormSection>

        <FormSection title="כתובת דוא״ל">
          <div className={styles['form-row']}>
            <form.AppField name="email">
              {field => <field.Input label="דואר אלקטרוני" />}
            </form.AppField>
            <form.AppField name="isEmailConfirmed">
              {field => <field.CheckBox label="לאשר קבלת הודעות" />}
            </form.AppField>
          </div>
        </FormSection>

        <FormSection title="כתובת">
          <div className={styles['form-row']}>
            <form.AppField name="city">
              {field => <field.Input label="עיר" />}
            </form.AppField>
            <form.AppField name="street">
              {field => <field.Input label="רחוב" />}
            </form.AppField>
            <form.AppField name="houseNumber">
              {field => <field.Input label="מספר בית" />}
            </form.AppField>
          </div>
          <div className={styles['form-row']}>
            <form.AppField name="apartment">
              {field => <field.Input label="דירה" />}
            </form.AppField>
            <form.AppField name="zipCode">
              {field => <field.Input label="מיקוד" />}
            </form.AppField>
          </div>
        </FormSection>

        <FormSection title="טלפונים">
          <div className={styles['form-row']}>
            <form.AppField name="primaryPhone">
              {field => <field.Input label="מספר טלפון ראשי" />}
            </form.AppField>
            <form.AppField name="secondaryPhone">
              {field => <field.Input label="מספר טלפון משני" />}
            </form.AppField>
          </div>
        </FormSection>

        <div className={styles['form-buttons']}>
          <Button variant="text">חזרה</Button>
          <Button type="submit">המשך</Button>
        </div>
      </Card>
    </form>
  );
};

export default RegistrationForm;