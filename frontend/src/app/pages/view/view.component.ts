import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Message} from '../../classes/message';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    messages: Message[];
    cols: any[];

  constructor(
    private messageService: MessageService
  ) {

    this.messages = [];
  }

  ngOnInit(): void {
    this.messageService.getAllMessage().subscribe( (response) => {
      this.messages = response;
    });

    this.cols = [
      { field: 'author', header: 'Author'},
      { field: 'body', header: 'Message' },
      { field: 'createdAt', header: 'CreatedAt' },
    ];
  }

}
