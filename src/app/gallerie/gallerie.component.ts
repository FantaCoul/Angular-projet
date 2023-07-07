import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent {
  data:any;

  constructor(private http: HttpClient) {
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(reponse=>{
      this.data=reponse
      console.log(reponse)
    })
  }

}
