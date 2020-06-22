import { ValidatorFn, AbstractControl } from '@angular/forms';

export function duplicateBuzzwordValidator(buzzwords: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return buzzwords.find((x: string) => x === control.value)
      ? { duplicateBuzzword: { value: control.value } }
      : null;
  };
}
