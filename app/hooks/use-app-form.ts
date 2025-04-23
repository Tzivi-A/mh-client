//import { lazy } from 'react';
import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './form-context';
import { AppFormSelect } from '@ui/form/select/app-form-select';
import { AppFormNumber } from '@ui/form/input/number-input/app-form-number-input';
import { AppFormTextInput } from '@ui/form/input/text-input/app-form-text-input';
import { AppFormDatePicker } from '@ui/form/date-picker/app-form-date-picker';
import { AppFormCheckBox } from '@ui/form/check-box/app-form-check-box';

const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    Input: AppFormTextInput,
    Number: AppFormNumber,
    Select: AppFormSelect,
    DatePicker: AppFormDatePicker,
    CheckBox: AppFormCheckBox
  },
  formComponents: {}
});

export { withForm };
export default useAppForm;
