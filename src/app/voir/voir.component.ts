import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voir',
  templateUrl: './voir.component.html',
  styleUrls: ['./voir.component.css']
})
export class VoirComponent {
  data: any;
  id: Number;
  constructor(private route: ActivatedRoute,
    private http: HttpClient){
    this.id=this.route.snapshot.params["id"];
    this.http.get("https://jsonplaceholder.typicode.com/posts/"+this.id).subscribe((response) => {
    this.data = response;
    console.log(this.data);
    }
    )

  }

}
