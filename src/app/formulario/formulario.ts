import { DataService } from './../DataService';
import { HousingService } from './../../../../home/src/app/housing.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Name" #filter1 required />
        <input type="text" placeholder="Apellidos" #filter2 required />
        <input type="number" placeholder="Edad" #filter3 required />
        <input type="email" placeholder="Email" #filter4 required />
        <input type="checkbox" name="condiciones" id="conditions" #filter5 required />
        <button type="button" id="enviar" (click)="validarCampos(filter1.value, filter2.value, filter3.value, filter4.value, filter5.checked)">Send</button>
      </form>
    </section>
  `,
  styleUrls: ['formulario.css']
})
export class HomeForm {
  constructor(private dataService: DataService) {}

  validarCampos(filter1: string, filter2: string, filter3: string, filter4: string, filter5: boolean) {
    if (!filter1 || !filter2 || !filter3 || !filter4 || !filter5) {
      window.alert("Rellena todos los campos!!!");
      return;
    }

    const numero = Number(filter3);
    if (isNaN(numero)) {
      window.alert("La edad debe ser un número!!!");
      return;
    }

    if (numero < 17) {
      window.alert("La edad mínima es 17!!!");
      return;
    }

    if (!this.validarEmail(filter4)) {
      window.alert("Correo inválido!!!");
      return;
    }

    const formData = { filter1, filter2, numero, filter4, filter5 };
    this.dataService.setFormData(formData);
    this.bienvenida(filter1, filter2, numero, filter4, filter5);
  }

  validarEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  bienvenida(filter1: string, filter2: string, edad: number, filter4: string, filter5: boolean) {
    window.alert(`BIENVENIDO: ${filter1} ${filter2} ${edad} ${filter4}`);
  }
}
