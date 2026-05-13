import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyectoAngular1');

}
// Credenciales quemadas
const CREDENCIALES = {
  EMAIL: "usuario@ejemplo.com",
  CONTRASENA: "123456"
};

// Clase principal para gestionar el login
class GestorLogin {
  private form: HTMLFormElement;
  private emailInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;

  constructor() {
    this.form = document.getElementById('loginForm') as HTMLFormElement;
    this.emailInput = document.getElementById('email') as HTMLInputElement;
    this.passwordInput = document.getElementById('password') as HTMLInputElement;

    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  private handleSubmit(event: Event): void {
    event.preventDefault();
    const email = this.emailInput.value;
    const contrasena = this.passwordInput.value;

    if (this.validarCredenciales(email, contrasena)) {
      alert('Inicio de sesión exitoso');
      // Aquí puedes redirigir a otra página
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }

  private validarCredenciales(email: string, contrasena: string): boolean {
    return email === CREDENCIALES.EMAIL && contrasena === CREDENCIALES.CONTRASENA;
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new GestorLogin();
});
