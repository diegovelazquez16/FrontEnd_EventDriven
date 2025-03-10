import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      window.location.href = '/pedidos'; // Redirigir a la página de pedidos
    } catch (error) {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
