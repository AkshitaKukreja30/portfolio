import { Component, OnInit } from '@angular/core';
import * as jsonData from '../dataNew.json';
import { ChartOptions, ChartType, ChartDataSets, Chart } from 'chart.js';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent{
  skillsList = jsonData[0]['Skills'];

  chartOptions = {
    responsive: true,
    scales: {
        xAxes: [{
        	display: false,
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            } ,
            ticks: {
            	mirror: true,
            	padding: -10,
            	fontStyle: "bold",
                fontColor: '#000',
                fontSize : 15
            }
        }]
    }
  };

  chartData = [
    { 
    data: [320,220,220,220,230,280,310,235,265,300,210] ,
    labels: this.skillsList
	}
      ];

  colors = ['#cccccc']
  
  chartLabels = this.skillsList;

  onChartClick(event) {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.skillsList); 

}
  

}