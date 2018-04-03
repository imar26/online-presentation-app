import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-slide-area',
  templateUrl: './slide-area.component.html',
  styleUrls: ['./slide-area.component.scss']
})
export class SlideAreaComponent implements OnInit {
  @Input() textField: Array<string>;
  
  inBounds = true;
  url: any;
  datas: Array<any> = [];
  
  constructor() {
    this.textField = [];
  }

  createSticky() {
    this.textField.push("");
  }

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
