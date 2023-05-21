import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/shared/service/email.service';

@Component({
    selector: 'app-quote-form',
    templateUrl: './quote-form.component.html',
    styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
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
        const message = this.buildMessage(requestDetails);
        console.log(message);
        this.sendEmail(message);
    }

    buildMessage(requestDetails) {
        return `
Hello

This is ${requestDetails.name} ${requestDetails.surname} and would like to request a quote for my ${requestDetails.type}.

${requestDetails.message}.

Please contact me on ${requestDetails.phone} or email me at ${requestDetails.email};

Kind regards

${requestDetails.name}
    `;
    }

    sendEmail(message): void {
        this.emailService.SendEmail(message).subscribe(
            (data) => console.log(data),
            (error) => {
                console.log(error);
            }
        );
    }
}
