import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes =
 [
  {path:'accueil', component:AccueilComponent},
  {path:'contact', component:ContactComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'blog', component:BlogComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
