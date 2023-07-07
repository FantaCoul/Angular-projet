import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BlogComponent } from './blog/blog.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { VoirComponent } from './voir/voir.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AfficherComponent } from './afficher/afficher.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LayoutComponent,
    ContactComponent,
    InscriptionComponent,
    ConnexionComponent,
    BlogComponent,
    ExerciceComponent,
    VoirComponent,
    GallerieComponent,
    AfficherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
