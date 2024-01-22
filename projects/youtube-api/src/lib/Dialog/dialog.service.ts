import {
  ApplicationRef,
  ComponentRef,
  Inject,
  Injectable,
  createComponent,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { VideoPlayerComponent } from '../components/VideoPlayer/video-player.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private container: HTMLElement | undefined;
  private body: Element | null = null;
  private _wind: HTMLElement | undefined;
  private component: ComponentRef<unknown> | undefined;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private appRef: ApplicationRef
  ) {
    this.createElements();
  }

  private createElements() {
    this.body = this.doc.querySelector('app-root');
    this.container = this.doc.createElement('div');

    let cs = `width: 100%;height: 100%;position: absolute;top: 0;background-color: rgba(0, 0, 0, 0.7);z-index: 11;`;
    this.container.setAttribute('style', cs);

    this.container.onclick = () => this.close();

    this._wind = this.doc.createElement('div');
    let ws = `position: absolute;inset:0;width:fit-content;height:fit-content;margin:auto;`;
    this._wind.setAttribute('style', ws);

    this.container.appendChild(this._wind);
  }


  /**
   * Open PlayerVideo Modal to play YouTube videos
   * @param src Video ID
   * @example
   * export class Example {
   *   ...
   *   constructor( private dialog:DialogService){}
   *
   *   openVideo(src:string): void {
   *      this.dialog.open(src);
   *   }
   *}
   * @returns
   */
  open(src: string):void {
    if (!this._wind || !this.container || !this.body) return;
    this.body.appendChild(this.container);
    this.container.appendChild(this._wind);
    const environmentInjector = this.appRef.injector;
    const hostElement = this._wind;
    this.component =  createComponent(VideoPlayerComponent, {
      hostElement,
      environmentInjector,
    });
    this.component.setInput('src', src);
    this.appRef.attachView(this.component.hostView);
  }

  close():void {
    if (!this.component || !this.container || !this.body) return;
    this.component.destroy();
    this.component = undefined;
    this.body.removeChild(this.container);
  }
}
