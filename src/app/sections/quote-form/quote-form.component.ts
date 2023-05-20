import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-quote-form',
    templateUrl: './quote-form.component.html',
    styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
    requestForm: FormGroup;
    spaces = ['House', 'Garage', 'Garden'];
    constructor(private formBuilder: FormBuilder) {}

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
}
