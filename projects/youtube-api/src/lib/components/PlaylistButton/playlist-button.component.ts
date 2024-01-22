import { Component, Input } from '@angular/core';
import { YoutubeApiService } from '../../youtube-api.service';
import { Item, PlaylistsResponse } from '../../interfaces/ChannelPlaylists';
import { PlaylistItem } from '../../interfaces/PlaylistItems';
import { DialogService } from '../../Dialog/dialog.service';

@Component({
  selector: 'yta-playlist-button',
  templateUrl: './playlist-button.component.html',
  styleUrls: ['./playlist-button.component.css'],
})
export class PlaylistButtonComponent {
  playlists: PlaylistsResponse[] = [];
  currentPlaylist: PlaylistsResponse | undefined;
  currentIndex: number = 0;

  playlistSelected: PlaylistItem[] | undefined;

  title: string = '';
  description: string | undefined;

  /**
   * Id from youtube channel
   */
  @Input() channelId: string = '#$%';

  constructor(
    private apiService: YoutubeApiService,
    private dialog: DialogService
  ) {}

  preview(): void {
    this.currentIndex = this.currentIndex - 1;
    this.currentPlaylist = this.playlists[this.currentIndex];
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    this.currentPlaylist = this.playlists[this.currentIndex];
    if (this.currentPlaylist && this.currentPlaylist.nextPageToken) {
      this.getPlaylist(this.currentPlaylist.nextPageToken);
    }
  }

  getPlaylist(token: string): void {
    if (this.channelId === '#$%')
      throw new Error('Channel ID is required in ButtonComponent');
    const subs = this.apiService
      .getChannelPlaylists(this.channelId, token)
      .subscribe({
        next: (res) => {
          this.playlists[this.currentIndex + 1] = res;
          subs.unsubscribe();
        },
      });
  }

  openPlaylist(): void {
    if (this.channelId === '#$%')
      throw new Error('Channel ID is required in ButtonComponent');
    const subs = this.apiService.getChannelPlaylists(this.channelId).subscribe({
      next: (res) => {
        let arrayLenght =
          res.pageInfo.totalResults / res.pageInfo.resultsPerPage;
        this.playlists = new Array(Math.ceil(arrayLenght));
        this.currentPlaylist = res;
        this.playlists[0] = res;
        subs.unsubscribe();
        if (res.nextPageToken) this.getPlaylist(res.nextPageToken);
      },
    });
  }

  closeView(): void {
    this.playlists = [];
    this.currentPlaylist = undefined;
    this.currentIndex = 0;
    this.playlistSelected = undefined;
  }

  select(playlist: Item): void {
    this.title = playlist.snippet.title;
    this.description = playlist.snippet.description ?? undefined;
    this.apiService
      .getPlaylistItems(playlist.id, playlist.contentDetails.itemCount)
      .subscribe({
        next: ({ items }) => (this.playlistSelected = items),
      });
  }

  openVideo(id: string): void {
    this.dialog.open(id);
  }
}
