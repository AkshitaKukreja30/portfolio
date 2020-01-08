import { Component, OnInit } from '@angular/core';
import * as jsonData from '../dataNew.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 

  contact = jsonData[0]['Contact'];
}
