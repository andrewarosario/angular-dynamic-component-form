import { stringify } from '@angular/compiler/src/util';
import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: (error) => `Campo obrigatório`,
  minlength: ({ requiredLength }) =>
    `Deve possuir no mínimo ${requiredLength} caracteres`,
  maxlength: ({ requiredLength }) =>
    `Deve possuir no máximo ${requiredLength} caracteres`,
  min: ({ min }) =>
    `Valor mínimo: ${min}`,
  max: ({ max }) =>
    `Valor máximo: ${max}`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
