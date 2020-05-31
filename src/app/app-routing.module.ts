import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { GamePage } from './pages/game/game.page';


const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'game/:number', component: GamePage}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
