import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BlogComponent } from './blog/blog.component';
import { VoirComponent } from './voir/voir.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AfficherComponent } from './afficher/afficher.component';

const routes: Routes =
 [
  {path:'', component:AccueilComponent},
  {path:'contact', component:ContactComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'blog', component:BlogComponent},
  {path:'exercice', component:ExerciceComponent},
  {path:'voir/:id', component:VoirComponent},
  {path:'gallerie', component:GallerieComponent},
  {path:'afficher/:id', component:AfficherComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
