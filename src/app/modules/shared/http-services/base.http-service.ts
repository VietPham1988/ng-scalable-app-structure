import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { EnvService } from 'app/modules/shared/environement-service/env.service';

@Injectable()
export class BaseHttpService {
  private baseUrl: string;
  constructor(
    protected http: HttpClient,
    private envService: EnvService
  ) {
    this.baseUrl = this.envService.apiUrl;
  }

  protected handleError = catchError( (error: HttpErrorResponse) => {
    const errorContent =  error.status === 400 ? error.error.details : error;
    return throwError(errorContent);
  });

  protected get<Type>(url: string, options?: any) {
    return this.http.get(this.baseUrl + url, options)
      .pipe(this.handleError);
  }

  protected post<Type>(url: string, data: Type, options?: any) {
    return this.http.post(this.baseUrl + url, data, options)
      .pipe(this.handleError);
  }

  protected put<Type>(url: string, data: Type) {
    return this.http.put(this.baseUrl + url, data)
      .pipe(this.handleError);
  }

  protected delete<Type>(url: string, data?: Type) {
    return this.http.delete(this.baseUrl + url, data)
      .pipe(this.handleError);
  }

}
