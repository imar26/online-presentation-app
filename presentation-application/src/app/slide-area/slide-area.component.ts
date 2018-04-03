import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-area',
  templateUrl: './slide-area.component.html',
  styleUrls: ['./slide-area.component.scss']
})
export class SlideAreaComponent implements OnInit {
  inBounds = true;  
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  
  constructor() { }

  ngOnInit() {
  }

  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }

}
