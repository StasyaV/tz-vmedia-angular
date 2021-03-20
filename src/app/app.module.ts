import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { PermissionMenuComponent } from './permission-menu/permission-menu.component';
import {MatIconModule} from '@angular/material/icon';
import { PermissionMenuContentComponent } from './permission/permission-menu-content/permission-menu-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PermissionMenuComponent,
    PermissionMenuContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
