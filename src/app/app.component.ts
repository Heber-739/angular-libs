import { Component } from '@angular/core';
import { Snippet } from 'projects/youtube-api/src/lib/interfaces/ChannelResponse';
import { DialogService, YoutubeApiService } from 'projects/youtube-api/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-libs';

  constructor( private dialog:DialogService){}

  openVideo(src:string): void {
    this.dialog.open(src);
  }
}
