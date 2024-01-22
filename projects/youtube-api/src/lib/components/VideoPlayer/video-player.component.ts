import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { env } from '../../env';

@Component({
  selector: 'yta-video-player',
  template: ` <div class="video_container" *ngIf="src">
    <iframe
      #iframe
      [src]="getSafeUrl()"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>`,
  styles: [
    `
      .video_container {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class VideoPlayerComponent implements AfterViewInit {

  /**
   * Id from video to show
   * @example
   * First youtube video: https://www.youtube.com/watch?v=rdwz7QiG0lk
   * src="rdwz7QiG0lk"
   */
  @Input() src: string = "#$%";
  @ViewChild('iframe') view: ElementRef | undefined;

  constructor(private domSan: DomSanitizer, private render: Renderer2) {}

  @HostListener('window:resize')
  onResize() {
    if (!this.view) return;
    let w = Math.trunc(window.innerWidth * 0.7);
    let h = Math.trunc(window.innerHeight / 1.7);
    this.render.setAttribute(
      this.view.nativeElement,
      'style',
      `width:${w}px;height:${h}px;`
    );
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  getSafeUrl(): SafeResourceUrl | undefined {
    if (this.src === "#$%") throw new Error("src is required");
    const url = `${env.VIDEOEMBED}/${this.src}`;
    return this.domSan.bypassSecurityTrustResourceUrl(url);
  }
}
