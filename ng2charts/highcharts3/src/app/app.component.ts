import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Highcharts = Highcharts;
  data = [{name: 'Jane', data: [1, 0, 4]}, {name: 'Jan', data: [2, 3, 1]}]
  title = 'highcharts3';
  chartOptions: any = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Bar Chart',
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
          text: 'Fruit eaten'
      }
    },series : [
      {
        name: 'Jan',
        data: [0, 1, 2]
      },
      {
        name: 'Jane',
        data: [2, 3, 4]
      }
    ],
  }
}
