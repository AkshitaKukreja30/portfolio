import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import * as jsonData from '../dataNew.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  skillList = jsonData[0]['Skills'];
}
