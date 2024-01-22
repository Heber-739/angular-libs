import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubUsersModule } from 'projects/github-users/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeApiModule } from 'youtube-channel-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubUsersModule,
    BrowserAnimationsModule,
    YoutubeApiModule.setKey({apiKey:''})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
