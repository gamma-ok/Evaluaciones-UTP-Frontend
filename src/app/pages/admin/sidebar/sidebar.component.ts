import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarAdminComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {

  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
