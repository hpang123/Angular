import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

//For template driven form
import { FormsModule} from "@angular/forms";

//For model driven form, we need to import ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';

import { MyserviceService } from './myservice.service';
import { MycmpComponent } from './mycmp/mycmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MycmpComponent,
    ChangeTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //For template driven form
    FormsModule,
    //For model driven form
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'mycmp',
        component: MycmpComponent
      }
    ])

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
