import { ModuleWithProviders, NgModule } from '@angular/core';
import { YoutubeApiComponent } from './youtube-api.component';
import { CommonModule } from '@angular/common';
import { Config } from '../config';
import { YoutubeApiService } from './youtube-api.service';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/Banner/banner.component';
import { VideoPlayerComponent } from './components/VideoPlayer/video-player.component';
import { CardComponent } from './components/Card/card.component';
import { PlaylistButtonComponent } from './components/PlaylistButton/playlist-button.component';

const COMPONENTS = [YoutubeApiComponent,VideoPlayerComponent,BannerComponent,CardComponent,PlaylistButtonComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, HttpClientModule],
  exports: COMPONENTS
})
export class YoutubeApiModule {
  static setKey(config:Config):ModuleWithProviders<YoutubeApiModule> {
    if(!config.apiKey){
      throw new Error("apiKey is required in YoutubeApiModule");
    }
    return {
      ngModule: YoutubeApiModule,
      providers: [
        YoutubeApiService,
        {
          provide: 'config',
          useValue: config
        }
      ]
    }
  }
}
