import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Name" #filter1/>
        <input type="text" placeholder="apellidos" #filter2/>
        <input type="text" placeholder="edad" #filter3/>
        <input type="email" placeholder="email" #filter4/>
        <input type="checkbox" name="condiciones" id="conditions"#filter5>
        <button type="submit" id="enviar"(click)="validarCampos(filter1.value ,filter2.value ,filter3.value, filter4.value, filter5.checked)">Send</button>
      </form>
    </section>
 
  `,
})

export class HomeForm {

    validarCampos( filter1: string ,filter2: string,filter3:string,filter4:string,filter5:boolean){
        if(filter1=="" || filter2=="" || filter3=="" || filter4=="" || filter5 == false){
            window.alert("Rellena los campos!!!");

        }
        let numero = Number(filter3)
        if(numero==null){
            window.alert("La edad es numerica!!!");

        }
        if(numero<17){
            window.alert("La edad minima es17!!!");
        }
        if(filter4.search("@")==null){
            window.alert("correo Invalido!!!");
        }
        else{
            this.bienvenida(filter1,filter2,numero,filter4,filter5);
        }
        

    }
    bienvenida(filter1: string ,filter2: string,edad:number,filter4:string,filter5:boolean){
        window.alert("BIENVENIDO: "+filter1 +" "+filter2+" "+edad+" "+filter4+" "+filter5);



    }
  
}