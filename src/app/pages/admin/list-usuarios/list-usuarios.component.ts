import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  usuarios: any[] = [];
  errorMessage: string = '';

  getNombreRol(rol: string): string {
    switch (rol) {
      case 'ADMIN':
        return 'Administrador';
      case 'NORMAL':
        return 'Estudiante';
      default:
        return rol;
    }
  }

  getEstadoTexto(estado: boolean): string {
    return estado ? 'Activo' : 'Inactivo';
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe(
      (data: any[]) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
        this.errorMessage = 'Error al cargar la lista de usuarios';
      }
    );
  }
}
