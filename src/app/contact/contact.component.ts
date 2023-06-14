import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
     estConnecte:Boolean=false;
     prenom:String="Fanta";
     nom:String="COULIBALY";
     age:Number=14;
     annee:number[]=[2020,2021,2022,2023];
     annee1:(number|String)[]=["Deux mille vingt un",2021,2022,"Deux mille vingt trois"]
}

