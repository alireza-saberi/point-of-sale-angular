import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }

  getUserFirstName(user) {
    return user.displayName.split(' ')[0];
  }
}
