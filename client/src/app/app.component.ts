import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'

})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    const potentionalToken = localStorage.getItem('auth-token')
    if (potentionalToken !== null) {
      this.auth.setToken(potentionalToken)
    }
  }
}
