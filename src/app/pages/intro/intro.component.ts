import {Component, OnInit} from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(public _counter: CounterService) {
  }

  ngOnInit(): void {
  }

}
