import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    private url = 'https://mailthis.to/';
    constructor(private http: HttpClient) {}

    SendEmail(input: any) {
        return this.http.post<any>(this.url, input).pipe(catchError(this.handleRequestError));
    }

    private handleRequestError(response: HttpErrorResponse) {
        console.log(response);
        const errorMessage = response.error.error;
        return throwError({ errorMessage });
    }
}
