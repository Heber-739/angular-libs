# Librería Github User Profile

Muestra la información de un usuario de Github haciendo uso de la librería de la API. La librería está desarrollada en Angular.

## Instrucciones

Hay que seguir las siguientes instrucciones para un correcto uso de la librería

### Instalación

```npm install github-users```

### Configuración

En el app.module.ts (por defecto) tenemos que importar el módulo de la librería **"GithubUserWidgetModule"**

```
import { GithubUserWidgetModule } from 'github-users';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Uso

```
<guw-usuario [busqueda]="<usuario_a_buscar>"></guw-usuario>
```
