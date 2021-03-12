import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly autoresizeArea = true;

  cardHeader: string;
  formNickname: string;
  formBody: string;

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {
    this.cardHeader = 'Your message for world';
    this.formNickname = '';
    this.formBody = '';
  }

  ngOnInit(): void {
  }

  sendMessage(): void{
    const message = {
      author: this.formNickname.trim(),
      body: this.formBody.trim()
    };
    this.messageService.addMessage(message).subscribe( (response) => {
      console.log(response);
      this.clearInput();
    });
  }

  clearInput(): void{
    this.formNickname = '';
    this.formBody = '';
  }

}
