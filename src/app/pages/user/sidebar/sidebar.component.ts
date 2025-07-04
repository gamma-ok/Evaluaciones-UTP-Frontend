import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarUserComponent implements OnInit {

  categorias:any;

  iconosPorCategoria: { [key: string]: string } = {
  'Matemáticas': 'calculate',
  'Lenguaje': 'menu_book',
  'Historia': 'history_edu',
  'Ciencias': 'science',
  // etc.
  };

  constructor(
    private categoriaService:CategoriaService,
    private snack:MatSnackBar,
    public login:LoginService
  ) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (data:any) => {
        this.categorias = data;
      },
      (error) => {
        this.snack.open('Error al cargar las categorías','',{
          duration:3000
        })
        console.log(error);
      }
    )
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
