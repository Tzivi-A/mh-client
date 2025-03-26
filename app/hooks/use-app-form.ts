//import { lazy } from 'react';
import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './form-context';
import { AppFormSelect } from '~/components/input/select/app-form-select';
import { AppFormText } from '~/components/input/text-input/app-form-text-input';

//fsdfdsf
// const AppFormSelect = lazy(() =>
//   import('~/components/input/select/app-form-select').then(module => ({
//     default: module.AppFormSelect
//   }))
// );

const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    Input: AppFormText,
    // Number: AppFormNumber,
    Select: AppFormSelect
  },
  formComponents: {}
});

export { withForm };
export default useAppForm;
