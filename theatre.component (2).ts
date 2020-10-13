import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {
  Theatres:any = [];
  thMovies:any = [];
  theatre :string;
  Movies:any = [];
  movieList:any = []

  errorMsg: string;
 

  constructor(private httpClient :HttpClient){}
  ngOnInit(): void {
    this.httpClient.get('assets/data/movies.json')
    .subscribe(data => {
      this.Movies = data;
    },
    (error)=> {
      console.log("Error has occurred");
      this.errorMsg = error.message;
      alert(this.errorMsg);
    })

    this.httpClient.get('assets/data/theaters.json')
    .subscribe(data => {
      this.Theatres = data;
      console.log(this.Theatres);
      for(var i=0;i<this.Theatres.length;i++){
        this.thMovies[i] = [];
        for(var j=0;j<(this.Theatres[i].movies).length;j++){
          console.log(this.Theatres[i].movies[j]);
          this.thMovies[i].push(this.Movies[+this.Theatres[i].movies[j]]) ;
        }
      }
      console.log(this.thMovies);
      },
    (error)=> {
      console.log("Error has occurred");
      this.errorMsg = error.message;
      alert(this.errorMsg);
    })
    console.log(this.Theatres);
 }
 flag: boolean = true;

 onOptionsSelected(value:string) {
  if(value != "select"){
    
    this.movieList = this.thMovies[+value-1];
    this.flag=false;
    
  }
  else{
    this.flag = true;
  }
}

}


