import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: string[] = [ // imgs
    'assets/hero1.jpg',
    'assets/hero2.jpg',
    'assets/hero3.jpg',
    'assets/hero4.jpg',
    'assets/hero5.jpg',
    'assets/hero6.jpg'
  ];
  currentImageIndex = 0;
  animateBar = true;

  noticias = [
    {
      imagen: 'assets/noticia1.jpg',
      titulo: 'Docente de UTP Arequipa comparte su experiencia en la “XX Bienal de Arquitectura Peruana”',
      enlace: 'https://www.utp.edu.pe/noticias/index.php/docente-de-utp-arequipa-comparte-su-experiencia-en-la-xx-bienal-de-arquitectura-peruana'
    },
    {
      imagen: 'assets/noticia2.jpg',
      titulo: 'Estudiante de UTP Chiclayo participó en el programa International School de UNISC en Brasil',
      enlace: 'https://www.utp.edu.pe/noticias/estudiante-de-utp-chiclayo-participo-en-el-programa-international-school-de-unisc-en-brasil'
    },
    {
      imagen: 'assets/noticia3.jpg',
      titulo: 'UTP firma convenio de intercambio académico con la Universidade Federal de Minas Gerais (UFMG) de Brasil',
      enlace: 'https://www.utp.edu.pe/noticias/utp-firma-convenio-de-intercambio-academico-con-la-universidade-federal-de-minas-gerais-ufmg-de'
    },
    {
      imagen: 'assets/noticia4.jpg',
      titulo: 'Estudiante UTP participa en innovadora investigación para la remoción de microplásticos mediante electrocoagulación',
      enlace: 'https://www.utp.edu.pe/noticias/investigacion/estudiante-utp-participa-en-innovadora-investigacion-para-la-remocion-de'
    }
  ];

  isLoggedIn = false;
  user: any = null;

  constructor(public login: LoginService) { }

  ngOnInit(): void {
    // Cambiar imagen cada 10s
    setInterval(() => {
      this.nextImage();
    }, 10000);

    // Login control
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(data => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }

  // Ccambiar img y reiniciar
  nextImage(): void {
    this.animateBar = false;
    setTimeout(() => {
      this.animateBar = true;
    }, 50);

    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  public logout(): void {
    this.login.logout();
    window.location.reload();
  }
}
