import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/usuarios/';

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // otros métodos...
}
