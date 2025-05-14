import { Card } from '@ui/card/card';
import useAppForm from '@hooks/use-app-form';
import { Button } from '@ui/button/button';
import { Flex } from '@ui/layout/flex/flex';
import { isInputRequired } from '~/validators/common/requierd-validators';
import Section from '@ui/section/section';

interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  idNumber: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
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
    <Section header="פרטי המועמד">
      <form
        onSubmit={e => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <Card>
          <Flex direction="column">
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

            <form.AppField
              name="idNumber"
              validators={{
                onChange: ({ value }) => isInputRequired(value)
              }}
            >
              {field => <field.Input label="תעודת זהות" isRequired={true} />}
            </form.AppField>

            <form.AppField name="email">
              {field => <field.Input label="דואר אלקטרוני" />}
            </form.AppField>

            <form.AppField name="phone">{field => <field.Input label="טלפון" />}</form.AppField>

            <form.AppField name="address">{field => <field.Input label="כתובת" />}</form.AppField>

            <form.AppField name="city">{field => <field.Input label="עיר" />}</form.AppField>

            <form.AppField name="zipCode">{field => <field.Input label="מיקוד" />}</form.AppField>

            <Flex justify="flex-end">
              <Button type="submit">המשך</Button>
            </Flex>
          </Flex>
        </Card>
      </form>
    </Section>
  );
};

export default RegistrationForm;
