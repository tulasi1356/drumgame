import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrumsComponent } from './drums/drums.component';
import { MainComponent } from './main/main.component';
import { PlayersComponent } from './players/players.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  {path:'', redirectTo:'main',pathMatch:'full'},
  {path:'main/:e', component: PlayersComponent},
  {path:'drums/:finalscore/:id/:name', component: ResultComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'drums', component: DrumsComponent},
  {path: 'main', component: MainComponent},
  {path: 'players/:q1/:value', component: DrumsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
