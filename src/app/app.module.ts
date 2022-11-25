import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllComponent } from './view-all/view-all.component';

const myRoute:Routes = [{path:"",component:AddToDoComponent},
                        {path:"view",component:ViewAllComponent}
                       ]

@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
