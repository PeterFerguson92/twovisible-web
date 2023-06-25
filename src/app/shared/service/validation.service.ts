import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { PHONE_REGEX, POSTCODE_REGEX } from 'src/constant';

@Injectable({
    providedIn: 'root',
})
export class ValidationService {
    private phoneValidationMessages = {
        required: 'Please enter phone number.',
        phone: 'Phone number not valid.',
    };

    private formMap = {
        phone: this.phoneValidationMessages,
    };

    constructor() {}

    phoneValidator = (control: FormControl): { [key: string]: boolean } | null => {
        const nameRegexp = PHONE_REGEX;
        if (control.value && !nameRegexp.test(control.value)) {
            return { postcode: true };
        }
        return null;
    }

    postCodeValidator(control: FormControl): { [key: string]: boolean } | null {
        const nameRegexp = POSTCODE_REGEX;
        if (control.value && !nameRegexp.test(control.value)) {
            return { postcode: true };
        }
        return null;
    }

    watchAndValidateFormControl(fControl: AbstractControl) {
        return fControl.valueChanges.pipe(debounceTime(1000));
    }

    getValidationMessage(fControl: AbstractControl, fControlName: string): string | null {
        const validationMessages = this.formMap[fControlName];
        if ((fControl.touched || fControl.dirty) && fControl.errors) {
            return Object.keys(fControl.errors).map((key) => validationMessages[key])[0];
        }
        return null;
    }
}
