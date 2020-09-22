import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  public errorMessage = '';

  constructor(private router: Router) { }

  public handleError(error: HttpErrorResponse): any {
    if (error.status === 500) {
      this.handle500Error(error);
    } else if (error.status === 404) {
      this.handle404Error(error);
    } else {
      this.handleOtherError(error);
    }
  }
  private handleOtherError(error: HttpErrorResponse): any {
    this.createErrorMessage(error);
  }
  private handle404Error(error: HttpErrorResponse): any {
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }
  private handle500Error(error: HttpErrorResponse): any {
    this.router.navigate(['/500']);
  }
  private createErrorMessage(error: HttpErrorResponse): any {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
