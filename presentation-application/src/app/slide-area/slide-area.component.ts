import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-area',
  templateUrl: './slide-area.component.html',
  styleUrls: ['./slide-area.component.scss']
})
export class SlideAreaComponent implements OnInit {
  inBounds = true;
  url: any;
  datas: Array<any> = [];
  
  constructor() { }

  ngOnInit() {
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.url = event.target.result;
        // console.log(this.url);
        // this.datas.push(this.url);
        // console.log(this.datas);
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }  

}
