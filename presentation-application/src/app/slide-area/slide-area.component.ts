import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-slide-area',
  templateUrl: './slide-area.component.html',
  styleUrls: ['./slide-area.component.scss']
})
export class SlideAreaComponent implements OnInit {

  @Input() textField: Array<string>;
  

  constructor() {
    this.textField = [];
  }

  createSticky() {
    this.textField.push("");
  }

  ngOnInit() {
  }

}
