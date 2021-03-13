import { Injectable } from '@angular/core';
import {Message} from 'primeng/api';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  submissionSuccessfulMessage: Message = {
    severity: 'success',
    summary: 'Success',
    detail: 'Submission successful'
  };

  errorMessage: Message = {
    severity: 'error',
    summary: 'Error',
    detail: 'Something went wrong, try again later'
  };

  invokeEvent: Subject<any> = new Subject();

  constructor() { }


  private showToast(message: Message): void {
    this.invokeEvent.next(message);
  }

  submissionSuccessful(): void {
    this.showToast(this.submissionSuccessfulMessage);
  }

  error(): any {
    this.showToast(this.errorMessage);
  }
}
