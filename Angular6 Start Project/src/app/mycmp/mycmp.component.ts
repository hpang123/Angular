import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-mycmp',
  templateUrl: './mycmp.component.html',
  styleUrls: ['./mycmp.component.css']
})
export class MycmpComponent implements OnInit {
  
  todaydate;
  newcomponentproperty;

  newcomponent = "Entered in new component created";

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();

    this.newcomponentproperty = this.myservice.serviceproperty;
  }

}
