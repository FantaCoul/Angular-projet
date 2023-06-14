import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  data:any;

  constructor(private http: HttpClient) {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(reponse=>{
      this.data=reponse
      console.log(reponse)
    })
  }

}
