import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { YoutubeApiService } from '../../youtube-api.service';
import { Snippet } from '../../interfaces/ChannelResponse';

@Component({
  selector: 'yta-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  channelInfo: Snippet | undefined;
  backg: HTMLElement | undefined;
  @ViewChild('cont') cont: ElementRef | undefined;

  @Input() channelId: string = '#$%';

  showCard: boolean = false;
  showPlaylist: boolean = false;

  @Input() set card(value: string) {
    this.showCard = !value;
  }
  @Input() set playlistButton(value: any) {
    this.showPlaylist = !value;
  }

  @Input() background: string | undefined;

  constructor(
    private apiService: YoutubeApiService,
    private render: Renderer2
  ) {}

  private init(): void {
    if (this.channelId === '#$%')
      throw new Error('Channel ID is required in BannerComponent');
    let obs = this.apiService.getChanelInfo(this.channelId).subscribe({
      next: (channelInfo) => {
        this.channelInfo = channelInfo ?? undefined;
        obs.unsubscribe();
      },
    });
  }

  ngOnInit(): void {
    this.init();
  }

  ngAfterViewInit(): void {
    if (!this.cont) throw new Error("Container isn't exist");
    if (this.background) {
      this.render.setAttribute(
        this.cont.nativeElement,
        'style',
        `background: ${this.background};`
      );
    } else {
      this.backg = this.render.createElement('div');
      this.render.addClass(this.backg, 'logo');
      this.render.addClass(this.cont.nativeElement, 'container');
      this.render.appendChild(this.cont.nativeElement, this.backg);
    }
  }
}
