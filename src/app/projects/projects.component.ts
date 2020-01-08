import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import * as jsonData from '../dataNew.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
  projectList = jsonData[0]['Projects'];
}
