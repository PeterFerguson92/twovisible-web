import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { EmailService } from 'src/app/shared/service/email.service';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
    selector: 'app-store-details',
    templateUrl: './store-details.component.html',
    styleUrls: ['./store-details.component.scss'],
})
export class StoreDetailsComponent implements OnInit, OnDestroy {
    infoText: string;
    errorText: string;
    showInfoText: boolean;
    showErrorText: boolean;
    showSpinner = false;
    checkoutForm: FormGroup;
    selectedPackage;
    packages = ['Package 1 - Single Light', 'Package 2 - Multiple Lights'];
    paymentHandler: any = null;
    componentDestroyed$: Subject<boolean> = new Subject();

    constructor(
        private formBuilder: FormBuilder,
        private emailService: EmailService,
        private validationService: ValidationService
    ) {}

    ngOnInit() {
        this.checkoutForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', [Validators.required]],
            phone: ['', [Validators.required, this.validationService.phoneValidator]],
            email: ['', Validators.email],
            addressLine1: ['', [Validators.required]],
            addressLine2: [''],
            postcode: ['', [Validators.required, this.validationService.postCodeValidator]],
            city: ['', [Validators.required]],

            package: [this.packages[0], [Validators.required]],
            additionalComments: [''],
        });
    }

    getFormControl(fControlName: string) {
        return this.checkoutForm.get(fControlName);
    }

    getValidationClass(fControlName) {
        const fControl = this.getFormControl(fControlName);
        if (fControl.dirty && fControl.valid) {
            if ('email' === fControlName) {
                return null;
            }
            return { validInput: true };
        }

        if (fControl.dirty && !fControl.valid) {
            return { invalidInput: true };
        }
    }

    isSubmitDisabled() {
        return false;
        // return !this.checkoutForm.valid;
    }

    onSubmit() {}

    selectPackage(value) {
        if (value === '1') {
            window.open('https://buy.stripe.com/test_bIY01Of298Nf7o4fYY', '_blank');
        } else {
            window.open('https://buy.stripe.com/fZe5lSfdV4ic7IY5km', '_blank');
        }
    }

    sendEmail(message): void {
    }

    clearNotification() {
        setTimeout(
            // tslint:disable-next-line:space-before-function-paren
            function () {
                this.showInfoText = false;
                this.showErrorText = false;
                this.errorText = null;
                this.infoText = null;
            }.bind(this),
            3000
        );
    }

    clearFields() {
        Object.keys(this.checkoutForm.controls).forEach((key) => {
            this.checkoutForm.controls[key].reset();
        });
    }

    ngOnDestroy() {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }
}
