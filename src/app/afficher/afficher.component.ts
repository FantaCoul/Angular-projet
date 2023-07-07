import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent {
  data: any;
  id: Number;
  constructor(private route: ActivatedRoute,
    private http: HttpClient){
    this.id=this.route.snapshot.params["id"];
    this.http.get("https://jsonplaceholder.typicode.com/photos"+this.id).subscribe((response) => {
    this.data = response;
    console.log(this.data);
    }
    )

  }

}
