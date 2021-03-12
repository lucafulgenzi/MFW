import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  messages: any[];

  constructor(
    private messageService: MessageService
  ) {

    this.messages = [];
  }

  ngOnInit(): void {
    this.messageService.getAllMessage().subscribe( (response) => {
      console.log(response);
      for (const message of response){
        this.messages.push(message);
      }
    });
  }

}
