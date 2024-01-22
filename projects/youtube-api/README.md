
# Componentes para youtube channel

Con esta librería podrás integrar componentes que te ayudaran a visualizar tu canal de youtube:
- Título, foto y descripción del canal.
- Listas de reproducción con su información.
- Videos y su descripción.


## Instalación

Instalación de la librería:

```bash
  npm install youtube-channel-components
```
 
## API

Tanto el componente ``VideoPlayerComponent``, como el servicio ``DialogService``, pueden ser usados con solo importar el modulo ``YoutubeApiModule``. Sin embargo, 
para el consumo de la api de youtube data v3, es requerido la inyección de una apikey mediante ``YoutubeApiModule.setKey()``. Puede seguir la guía en la documentación de la api https://developers.google.com/youtube/v3.

## Componentes

#### VideoPlayerComponent


``` 
<yta-video-player src="" ></yta-video-player>
```

| Propiedad | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
|  `src` | `string` | **Required**. Id del video |



## Ejemplo de uso
Primer video de youtube: 
 https://www.youtube.com/watch?v=rdwz7QiG0lk
```typescript
import { YoutubeApiModule } from 'youtube-channel-components';


@Component({
  selector: 'example',
  template: `<yta-video-player src="rdwz7QiG0lk" ></yta-video-player>`,
  standalone: true,
  imports: [YoutubeApiModule],
})
export class Example {}
```

#### PlaylistButtonComponent


``` 
<yta-playlist-button channelId="" ></yta-playlist-button>
```

| Propiedad | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
|  `channelId` | `string` | **Requerido**. Id del canal |


## Ejemplo de uso

```typescript
import { YoutubeApiModule } from 'youtube-channel-components';


@Component({
  selector: 'example',
  template: `<yta-playlist-button channelId="My-channel-id"> <yta-playlist-button>`,
  standalone: true,
  imports: [YoutubeApiModule.setKey({apiKey:'My-key'})],
})
export class Example {}
```

#### CardComponent


``` 
<yta-card channelId="" ></yta-card>
```

| Propiedad | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
|  `channelId` | `string` | **Requerido**. Id del canal |


## Ejemplo de uso

```typescript
import { YoutubeApiModule } from 'youtube-channel-components';


@Component({
  selector: 'example',
  template: `<yta-card channelId="My-channel-id" ></yta-card>`,
  standalone: true,
  imports: [YoutubeApiModule.setKey({apiKey:'My-key'})],
})
export class Example {}
```

#### BannerComponent


``` 
<yta-banner channelId=""></yta-banner>
```

| Propiedad | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
|  `channelId` | `string` | **Requerido**. Id del canal |
|  `card` | `` | Define la visualización del ``CardComponent`` dentro del banner |
|  `playlistButton` | `` | Define la visualización del ``playlistButton`` dentro del banner |
|  `background` | `string` | Define el shorthand estilo background del banner.  |

Notese que las propiedades `Card` y `playlistButton` no tienen tipo, por lo que pueden usarse como:
``
<yta-banner channelId="" card ></yta-banner>
`` o ``
<yta-banner channelId="" card="" ></yta-banner>
``

## Ejemplo de uso

```typescript
import { YoutubeApiModule } from 'youtube-channel-components';


@Component({
  selector: 'example',
  template: `<yta-banner channelId="My-channel-id"
    card
    playlistButton
    background="center/contain url('https://www.youtube.com/img/desktop/yt_1200.png') no-repeat #00000050"
    > </yta-banner>`,
  standalone: true,
  imports: [YoutubeApiModule.setKey({apiKey:'My-key'})],
})
export class Example {}
```

## Services

#### DialogService

Abre un modal para poder reproducir un video, agregando el id como parametro



## Ejemplo de uso

```typescript
import { YoutubeApiModule, DialogService } from 'youtube-channel-components';


@Component({
  selector: 'example',
  template: `<img style="height: auto;width: 100%;"
    (click)="openVideo('My-video-id')"
    src="https://www.youtube.com/img/desktop/yt_1200.png">`,
  standalone: true,
  imports: [YoutubeApiModule.setKey({apiKey:'My-key'})],
})
export class Example {

    constructor( private dialog:DialogService){}

  openVideo(src:string): void {
    this.dialog.open(src);
  }

}
```


## Authors


- [@Heber-739](https://github.com/Heber-739)



## License

[MIT](https://choosealicense.com/licenses/mit/)
