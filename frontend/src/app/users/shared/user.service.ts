import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  // URL da nossa API
  private url: string = "http://localhost:3000/users";

  constructor(private http: Http) { }




  // Pega as questions na API
  getUsers(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  // Pega uma question na API
  getUser(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  // Adiciona uma question na API
  addUser(user){

    console.log(user);
    return this.http.post(this.url, {'user': user})
      .map(res => res.json());
  }

  // Atualiza uma question na API
  updateUser(user){
    return this.http.put(this.url + '/' + user.id, {'user': user})
      .map(res => res.json());
  }

  // Apaga uma question no servidor
  deleteUser(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}