import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {

  errorMsg : string;

Movies:any = [];
movie:Movies;
name:any;
flag: boolean = true;

  constructor(private httpClient:HttpClient) { }

 


  ngOnInit(): void {
    this.httpClient.get("assets/data/movies.json").
  subscribe(data =>
    {
      console.log(data);
      this.Movies = data;
    },
    (error)=>
    {
      console.log("error has occured");
      this.errorMsg = error.message;
      alert(this.errorMsg);
    });
  } 

  onOptionsSelected(value:string) {
    if(value != "select"){
      for(var i=0;i<=this.Movies.length;i++){
        if(this.Movies[i].name == value){
          break;
        }
      }
      this.flag=false;
      this.movie = this.Movies[i];
    }
    else{
      this.flag = true;
    }
  }

}
