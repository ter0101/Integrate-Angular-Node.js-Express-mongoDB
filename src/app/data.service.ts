import { Injectable } from '@angular/core';

//add new
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class DataService {
  constructor(private http: Http) {}
  getLibrary() {
    return this.http.get('/api/show').pipe(map(res => res.json().message));
  }
  addLibrary(name: string, price: number) {
    const data = { name: name, price: price };
    return this.http.post('/api/add', data)
  }
  deleteBook(id:string){
    return this.http.delete('/api/delete/' + id)
  }
}
