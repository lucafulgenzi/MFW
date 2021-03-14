import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {ChartData} from '../../classes/chart-data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  data: any;
  basicOptions: any;
  responseData: ChartData[];
  dataLabels: string[];
  dataDataset: number[];

  constructor(
    private messageService: MessageService
  ) {
    this.dataLabels = [];
    this.dataDataset = [];
  }

  ngOnInit(): void {

    this.messageService.getDataMessage().subscribe( (response) => {

      this.responseData = response;
      for (let i = 0; i < this.responseData.length; i++){
        this.dataLabels.push(this.responseData[i].messageData);
        this.dataDataset.push(this.responseData[i].messageNumber);
      }

      this.data = {
        labels: this.dataLabels,
        datasets: [
          {
            label: 'Number of Message',
            data: this.dataDataset,
            fill: false,
            borderColor: '#42A5F5'
          },
        ]
      };

    });

    this.basicOptions = {
      legend: {
        labels: {
          fontColor: '#495057'
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }]
      }
    };
  }

}
