import { ValidatorFn } from '@angular/forms';

export type DynamicFormConfig = {
  type: string;
  label: string;
  name: string;
  initialValue?: any;
  placeholder?: string;
  options?: string[];
  validation?: ValidatorFn[];
};
