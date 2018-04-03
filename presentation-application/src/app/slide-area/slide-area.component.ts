import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-slide-area',
  templateUrl: './slide-area.component.html',
  styleUrls: ['./slide-area.component.scss']
})
export class SlideAreaComponent implements OnInit {
  inBounds = true;
  url: any;
  datas: Array<any> = [];
  texts: Array<any> = [];
  
  constructor() {
  }

  addTextField() {
    this.texts.push("");
  }

  ngOnInit() {
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.url = event.target.result;
        this.datas.push(this.url);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }  

}
