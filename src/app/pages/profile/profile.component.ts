import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any = null;

  getRolNombre(rol: string): string {
  switch (rol) {
    case 'ADMIN':
      return 'Administrador';
    case 'NORMAL':
      return 'Estudiante';
    default:
      return rol;
    }
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

}
