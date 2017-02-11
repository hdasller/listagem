import {Http, Headers, Response} from '@angular/http';
import {FotoComponent} from './foto.component';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable()
export class FotoService{

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/v1/fotos';
    url1: string = 'http://localhost:3000/v1/pagina';
    
        

    constructor(http: Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type','application/json');

    }

    lista(pagina: number): Observable<FotoComponent[]>{
        
     return this.http.get(this.url+"/"+pagina).map(res => res.json());
            
        
        }
    pagina(){
        return this.http.get(this.url1).map(res => res.json());
    }
   

}


