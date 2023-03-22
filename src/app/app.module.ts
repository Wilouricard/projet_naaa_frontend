import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProgramsPageComponent } from './programs-page/programs-page.component';
import { LeaderboardsPageComponent } from './leaderboards-page/leaderboards-page.component';
import { UserProfilPageComponent } from './user-profil-page/user-profil-page.component';
import { SectionComponent } from './home-page/section/section.component';
import { HelloUserComponent } from './home-page/hello-user/hello-user.component';
import { UserStatusComponent } from './home-page/user-status/user-status.component';
import { ProgramsComponent } from './programs-page/programs/programs.component';
import { SearchBarComponent } from './programs-page/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LandingPageComponent,
    ConnexionComponent,
    InscriptionComponent,
    NavbarComponent,
    HomePageComponent,
    ProgramsPageComponent,
    LeaderboardsPageComponent,
    UserProfilPageComponent,
    SectionComponent,
    HelloUserComponent,
    UserStatusComponent,
    ProgramsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
