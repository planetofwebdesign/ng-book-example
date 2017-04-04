import { Component, OnInit } from '@angular/core';

import { Http , Response} from '@angular/http';

@Component({
  selector: 'app-http-module-simple',
  templateUrl: './http-module.component.html',
  styleUrls: ['./http-module.component.css']
})
export class HttpModuleComponent implements OnInit {

  data: Object;
  loading: boolean;


  constructor( private http: Http) { }

  ngOnInit() {
  }


  makeRequest(){
  	this.loading=true;
  	this.http.request('http://jsonplaceholder.typicode.com/posts/1')
  		.subscribe((res: Response)=>{
  			this.data=res.json();
  			this.loading=false;

  		});
  }
}
