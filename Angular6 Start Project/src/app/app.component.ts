import { Component } from '@angular/core';
import { MyserviceService as myservice } from './myservice.service';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

//For model driven form
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    div .animation {
       margin: 0 auto;
      text-align: center;
      width:200px;
    }
    .rotate{
      width:100px;
     height:100px;
     border:solid 1px red;
   }
  `],
  animations: [
    trigger('myanimation',[
       state('smaller',style({
          transform : 'translateY(100px)'
       })),
       state('larger',style({
          transform : 'translateY(0px)'
       })),
       transition('smaller <=> larger',animate('300ms ease-in'))
    ])
 ]
})
export class AppComponent {
  title = 'My Project App';
  todaydate;
  componentproperty;


  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };


  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];

  isavailable = false;

  searchparam = 2;
  httpdata;
  name;
  //used for model form driven
  formdata;
  emailid;

  constructor(private myservice: myservice, private http: Http) { }

  state: string = "smaller";
   animate() {
      this.state= this.state == 'larger' ? 'smaller' : 'larger';
   }


  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();

    //test to see if the change on serviceproperty is across everywhere
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created"; // value is changed.
    this.componentproperty = this.myservice.serviceproperty;

    let url = "http://jsonplaceholder.typicode.com/users";
    this.http.get(url).pipe(map(response => response.json()))
      .subscribe(data => {
        this.displaydata(data);
      });

    url = "http://jsonplaceholder.typicode.com/users?id=" + this.searchparam;
    this.http.get(url).pipe(map(response => response.json()))
      .subscribe(data => {
        this.converttoarray(data);
      });

    //Model driven form
    this.formdata = new FormGroup({
      //emailid: new FormControl("angular@gmail.com"),
      emailid: new FormControl("angular@gmail.com", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation),
      searchparam: new FormControl()
    })
  }


  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }


  displaydata(data) {
    this.httpdata = data;
  }

  converttoarray(data) {
    console.log(data);
    this.name = data[0].name;
  }


  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked:" + event);
    console.log(event);
    this.isavailable = !this.isavailable;
  }

  changemonths(event) {
    alert("Changed month from the Dropdown");
    console.log(event);
  }

  onClickSubmit(data) {
    this.emailid = data.emailid;
    this.searchparam = data.searchparam;
    alert("Entered searchparam:" + data.searchparam);

    let url = "http://jsonplaceholder.typicode.com/users?id=" + this.searchparam;
    this.http.get(url).pipe(map(response => response.json()))
      .subscribe(data => {
        this.converttoarray(data);
      });

  }
}
