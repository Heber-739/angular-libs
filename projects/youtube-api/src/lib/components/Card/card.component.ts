import { Component, Input, OnInit } from '@angular/core';
import { Snippet } from '../../interfaces/ChannelResponse';
import { YoutubeApiService } from '../../youtube-api.service';

@Component({
  selector: 'yta-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent implements OnInit {

  /**
   * Id from youtube channel
   */
  @Input() channelId: string = "#$%";
  @Input() channelInfo: Snippet | undefined;

  constructor(private apiService:YoutubeApiService){}

  ngOnInit(): void {
    if(!this.channelInfo)  this.init();
  }

  private init():void {
      if(this.channelId === "#$%") throw new Error("Channel ID is required in CardComponent");
      this.apiService.getChanelInfo(this.channelId).subscribe({
        next:(channelInfo)=> this.channelInfo = channelInfo,
      })
  }

}
