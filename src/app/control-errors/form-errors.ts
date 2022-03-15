import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: (error) => `Campo obrigatório`,
  minlength: ({ requiredLength }) =>
    `Deve possuir no mínimo ${requiredLength} caracteres`,
  maxlength: ({ requiredLength }) =>
    `Deve possuir no máximo ${requiredLength} caracteres`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
