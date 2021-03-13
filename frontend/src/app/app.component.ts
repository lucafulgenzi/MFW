import {Component, OnInit} from '@angular/core';
import {Message, MessageService} from 'primeng/api';
import {ToastService} from '../app/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'frontend';

  constructor(private messageService: MessageService,
              private toastService: ToastService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.toastService.invokeEvent
      .subscribe((message: Message) => {
        this.showToast(message);
      });
  }

  private showToast(message: Message): void {
    this.messageService.add(message);
  }
}
