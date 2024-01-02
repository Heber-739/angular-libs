import { NgModule } from '@angular/core';
import { GithubUsersComponent } from './github-users.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const COMPONENTS = [GithubUsersComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [HttpClientModule, CommonModule],
  exports: COMPONENTS
})
export class GithubUsersModule { }
