import { StartComponent } from './pages/user/start/start.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { LoadExamenComponent } from './pages/user/load-examen/load-examen.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { ViewExamenPreguntasComponent } from './pages/admin/view-examen-preguntas/view-examen-preguntas.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';

import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { GeneralLayoutComponent } from './layouts/general-layout/general-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { ListUsuariosComponent } from './pages/admin/list-usuarios/list-usuarios.component';
import { VerEstudiantesComponent } from './pages/user/ver-estudiantes/ver-estudiantes.component';


const routes: Routes = [
  {
    path: '',
    component: GeneralLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: 'Inicio | UTP' }
      }
    ]
  },

  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Iniciar Sesión | UTP' }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: { title: 'Registrarse | UTP' }
      }
    ]
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
        data: { title: 'Portal del Docente | UTP' }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Perfil | UTP' }
      },
      {
        path: 'categorias',
        component: ViewCategoriasComponent,
        data: { title: 'Categorías | UTP' }
      },
      {
        path: 'add-categoria',
        component: AddCategoriaComponent,
        data: { title: 'Agregar Categoría | UTP' }
      },
      {
        path: 'examenes',
        component: ViewExamenesComponent,
        data: { title: 'Cuestionarios | UTP' }
      },
      {
        path: 'add-examen',
        component: AddExamenComponent,
        data: { title: 'Agregar Cuestionario | UTP' }
      },
      {
        path: 'examen/:examenId',
        component: ActualizarExamenComponent,
        data: { title: 'Editar Cuestionario | UTP' }
      },
      {
        path: 'ver-preguntas/:examenId/:titulo',
        component: ViewExamenPreguntasComponent,
        data: { title: 'Preguntas del Cuestionario | UTP' }
      },
      {
        path: 'add-pregunta/:examenId/:titulo',
        component: AddPreguntaComponent,
        data: { title: 'Agregar Pregunta | UTP' }
      },
      {
        path: 'pregunta/:preguntaId',
        component: ActualizarPreguntaComponent,
        data: { title: 'Editar Pregunta | UTP' }
      },
      {
        path: 'usuarios',
        component: ListUsuariosComponent,
        data: { title: 'Lista de Estudiantes | UTP' }
      }
    ]
  },

  {
    path: 'user-dashboard',
    component: UserLayoutComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: '',
        component: UserWelcomeComponent,
        data: { title: 'Portal del Estudiante | UTP' }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Perfil | UTP' }
      },
      {
        path: 'ver-estudiantes',
        component: VerEstudiantesComponent,
        data: { title: 'Lista de Estudiantes | UTP' }
      },
      {
        path: ':catId',
        component: LoadExamenComponent,
        data: { title: 'Cuestionarios | UTP' }
      },
      {
        path: 'instrucciones/:examenId',
        component: InstruccionesComponent,
        data: { title: 'Instrucciones | UTP' }
      },
      {
        path: 'start/:examenId',
        component: StartComponent,
        data: { title: 'Resolviendo Cuestionario | UTP' }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
