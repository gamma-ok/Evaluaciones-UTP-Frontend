import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/usuarios/';

  constructor(private http: HttpClient) { }

  public obtenerUsuarios(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
