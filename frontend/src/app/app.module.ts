import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';

import { routing } from './app.routing';
import { UserService } from './users/shared/user.service';
import { TimelineComponent } from './users/timeline/timeline.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent,
    TimelineComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
