import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubUsersModule } from 'projects/github-users/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
