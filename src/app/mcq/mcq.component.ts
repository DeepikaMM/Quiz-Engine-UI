import { Component, OnInit, Input } from '@angular/core';
import {QuestionModel} from '../questionModule';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() question: QuestionModel;

}
