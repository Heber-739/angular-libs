import { Inject, Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpClient } from '@angular/common/http';
import { ChannelResponse, Snippet } from './interfaces/ChannelResponse';
import { env } from './env';
import { Observable, catchError, map } from 'rxjs';
import { PlaylistsResponse } from './interfaces/ChannelPlaylists';
import { PlaylistItems } from './interfaces/PlaylistItems';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  constructor(
    @Inject('config') private config:Config,
    private http:HttpClient
    ) {}

    getChanelInfo(chanelId:string):Observable<Snippet>{
      const url = `${env.API}/channels?part=id%2Csnippet%2CcontentDetails&id=${chanelId}&key=${this.config.apiKey}`;
      return this.http.get<ChannelResponse>(url).pipe(
        catchError((err)=>{
          console.log(err);
          throw new Error("error");
        }),
        map(({items})=> items[0].snippet),
        );
    }

    getChannelPlaylists(channelId:string, pageToken?:string, maxResults: number = 6):Observable<PlaylistsResponse>{
      let url = `${env.API}/playlists?part=id%2Csnippet%2CcontentDetails&channelId=${channelId}&maxResults=${maxResults}`;
      if(pageToken) {
        url = url.concat(`&pageToken=${pageToken}`)
      }
      url = url.concat(`&key=${this.config.apiKey}`)
      return this.http.get<PlaylistsResponse>(url).pipe(
        catchError((err)=>{
          console.log(err);
          throw new Error("error");
        }),
      )
    }

    getPlaylistItems(playlistId:string, maxResults: number = 6):Observable<PlaylistItems>{
      const url = `${env.API}/playlistItems?part=id%2Csnippet%2CcontentDetails&maxResults=${maxResults}&playlistId=${playlistId}&key=${this.config.apiKey} `
      return this.http.get<PlaylistItems>(url).pipe(
        catchError((err)=>{
          console.log(err);
          throw new Error("error");
        }),
      )
    }


}
