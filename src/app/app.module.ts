import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameComponent } from 'src/components/game/game.component';
import { SquareComponent } from 'src/components/square/square.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
