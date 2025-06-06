import { Card } from '@ui/card/card';
import useAppForm, { useStore } from '@hooks/use-app-form';
import FormSection from '@ui/form-section/form-section';
import { Flex } from '@ui/layout/flex/flex';
import { isInputRequired } from '~/validators/common/requierd-validators';
import type { RegistrationFormValues } from '~/types/registration/registration-form-values';

export const RegistrationForm = () => {
  const form = useAppForm({
    defaultValues: {} as RegistrationFormValues,
    onSubmit: () => {
      // Form submission logic will be handled here
    }
  });

  const formErrorMap = useStore(form.store, state => state.errorMap);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Card>
        <FormSection title="פרטים אישיים" error={formErrorMap.onSubmit}>
          <Flex direction="row" justify="flex-start" align="flex-start">
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
          </Flex>
        </FormSection>

        <FormSection title="כתובת דוא״ל">
          <Flex direction="row" justify="flex-start" align="flex-start">
            <form.AppField
              name="email"
              validators={{
                onChange: ({ value }) => isInputRequired(value)
              }}
            >
              {field => <field.Input label="כתובת דוא''ל'" isRequired={true} />}
            </form.AppField>
            <form.AppField name="isEmailConfirmed">
              {field => <field.Switch label="לשלוח סיסמה" />}
            </form.AppField>
          </Flex>
        </FormSection>

        <FormSection title="כתובת">
          <Flex direction="column" justify="flex-start" align="stretch">
            <Flex direction="row" justify="flex-start" align="flex-start">
              <form.AppField
                name="city"
                validators={{
                  onChange: ({ value }) => isInputRequired(value)
                }}
              >
                {field => <field.Input label="עיר" isRequired={true} />}
              </form.AppField>
              <form.AppField
                name="street"
                validators={{
                  onChange: ({ value }) => isInputRequired(value)
                }}
              >
                {field => <field.Input label="רחוב" isRequired={true} />}
              </form.AppField>
              <form.AppField
                name="houseNumber"
                validators={{
                  onChange: ({ value }) => isInputRequired(value)
                }}
              >
                {field => <field.Input label="מספר בית" isRequired={true} />}
              </form.AppField>
            </Flex>
            <Flex direction="row" justify="flex-start" align="flex-start">
              <form.AppField name="apartment">
                {field => <field.Input label="דירה" />}
              </form.AppField>
              <form.AppField name="zipCode">{field => <field.Input label="מיקוד" />}</form.AppField>
            </Flex>
          </Flex>
        </FormSection>

        <FormSection title="טלפונים">
          <Flex direction="row" justify="flex-start" align="flex-start">
            <form.AppField
              name="primaryPhone"
              validators={{
                onChange: ({ value }) => isInputRequired(value)
              }}
            >
              {field => <field.Input label="מספר טלפון נייד" isRequired={true} />}
            </form.AppField>
            <form.AppField name="secondaryPhone">
              {field => <field.Input label="מספר טלפון נוסף" />}
            </form.AppField>
          </Flex>
        </FormSection>
      </Card>
    </form>
  );
};

export default RegistrationForm;
