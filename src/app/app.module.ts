import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrumsComponent } from './drums/drums.component';
import { MainComponent } from './main/main.component';
import { PlayersComponent } from './players/players.component';
import { ResultComponent } from './result/result.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
@NgModule({
  declarations: [
    AppComponent,
    DrumsComponent,
    MainComponent,
    PlayersComponent,
    ResultComponent,
    PuzzleComponent,
    LeaderboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
