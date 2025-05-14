import {
  createFormHook,
  createFormHookContexts,
  useStore as useStoreTanstack
} from '@tanstack/react-form';
import { AppFormSelect } from '@ui/form/select/app-form-select';
import { AppFormNumber } from '@ui/form/input/number-input/app-form-number-input';
import { AppFormTextInput } from '@ui/form/input/text-input/app-form-text-input';
import { AppFormDatePicker } from '@ui/form/date-picker/app-form-date-picker';
import { AppFormCheckBox } from '@ui/form/check-box/app-form-check-box';
import { AppFormRadioButton } from '@ui/form/radio-button/app-form-radio-button';
import { AppFormCheckBoxGroup } from '@ui/form/check-box/check-box-group/app-form-check-box-group';
import { AppFormSwitch } from '@ui/form/switch/app-form-switch';

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    Input: AppFormTextInput,
    Number: AppFormNumber,
    Select: AppFormSelect,
    DatePicker: AppFormDatePicker,
    CheckBox: AppFormCheckBox,
    CheckBoxGroup: AppFormCheckBoxGroup,
    RadioButton: AppFormRadioButton,
    Switch: AppFormSwitch
  },
  formComponents: {}
});

export const useStore = useStoreTanstack;

export { withForm };
export default useAppForm;