import { ValidatorFn } from '@angular/forms';

export type Fields = 'input' | 'select';

export type TypeControl = {
  field: Fields;
  typeField?: string;
};

export type DynamicFormConfig = {
  type: TypeControl;
  label: string;
  name: string;
  initialValue?: any;
  placeholder?: string;
  options?: string[];
  validation?: ValidatorFn[];
};
