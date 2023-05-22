import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    private url = 'https://api.emailjs.com/api/v1.0/email/send';
    constructor(private http: HttpClient) {}

    SendEmail(input: any) {
        const data = this.getData(input);
        return this.http.post<any>(this.url, data).pipe(catchError(this.handleRequestError));
    }

    getData(params) {
        return {
            service_id: 'service_by9zdq8',
            template_id: 'template_vqsd9sl',
            user_id: 'DtAgxA2AoWRpkn2RD',
            template_params: params,
        };
    }

    private handleRequestError(response: HttpErrorResponse) {
        console.log(response);
        const errorMessage = response.error.error;
        return throwError({ errorMessage });
    }
}
