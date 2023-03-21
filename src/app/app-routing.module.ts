import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';

import { HomePageComponent } from './home-page/home-page.component';
import { ProgramsPageComponent } from './programs-page/programs-page.component';
import { LeaderboardsPageComponent } from './leaderboards-page/leaderboards-page.component';
import { UserProfilPageComponent } from './user-profil-page/user-profil-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'programs-page', component: ProgramsPageComponent },
  { path: 'leaderboards-page', component: LeaderboardsPageComponent },
  { path: 'user-profil-page', component: UserProfilPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
