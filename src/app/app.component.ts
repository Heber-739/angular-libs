import { Component } from '@angular/core';
import { DialogService } from 'youtube-channel-components';

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
