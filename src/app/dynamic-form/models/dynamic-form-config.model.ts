import { ValidatorFn } from '@angular/forms';

export type TypeControl = {
  field: 'input' | 'select';
  typeField?: string;
}

export type DynamicFormConfig = {
  type: TypeControl;
  label: string;
  name: string;
  initialValue?: any;
  placeholder?: string;
  options?: string[];
  validation?: ValidatorFn[];
};
