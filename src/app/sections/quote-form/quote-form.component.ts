import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/shared/service/email.service';

@Component({
    selector: 'app-quote-form',
    templateUrl: './quote-form.component.html',
    styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
    infoText: string;
    errorText: string;
    showInfoText: boolean;
    showErrorText: boolean;
    showSpinner = false;
    requestForm: FormGroup;
    spaces = ['House', 'Garage', 'Garden'];
    constructor(private formBuilder: FormBuilder, private emailService: EmailService) {}

    ngOnInit() {
        this.requestForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', Validators.email],
            type: [this.spaces[0], [Validators.required]],
            message: ['', [Validators.required]],
        });
    }

    getFormControl(fControlName: string) {
        return this.requestForm.get(fControlName);
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
        return !this.requestForm.valid;
    }

    onSubmit() {
        const requestDetails = {};
        Object.keys(this.requestForm.controls).forEach((key) => {
            const formControl = this.requestForm.controls[key];
            requestDetails[key] = formControl.value;
        });
        this.sendEmail(requestDetails);
    }

    sendEmail(message): void {
        this.showSpinner = true;
        this.emailService.SendEmail(message).subscribe(
            (data) => {
                console.log(data);
                this.showSpinner = false;
                this.infoText = 'Request Sent Succesfully';
                this.showInfoText = true;
                this.clearNotification();
                this.clearFields();
            },
            (error) => {
                console.log(error);
                this.showSpinner = false;
                this.showErrorText = true;
                this.errorText = 'Something went wrong, Please contact support';
                this.clearNotification();
                this.clearFields();
            }
        );
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
        Object.keys(this.requestForm.controls).forEach((key) => {
            this.requestForm.controls[key].reset();
        });
    }
}
