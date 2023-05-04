import { Component, Renderer2, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-visor-eventos',
  templateUrl: './visor-eventos.component.html',
  styleUrls: ['./visor-eventos.component.css']
})
export class VisorEventosComponent {
  @ViewChild('detalles')componenteDetalles:any;
  datosServicio: any[] = [];
  //constructor(private servicio: AgendarService){
  //}
  formServicio = new FormGroup({
    'token': new FormControl('',Validators.required)
  })
  mostrarDatosServicio(){
    let mitoken = this.formServicio.value.token+"";
    /*this.servicio.getServicioDescripcion(mitoken).subscribe(datos => {
      this.datosServicio = datos;
      let texto ="<dl>"+
      "<dt>"+datos.titulo+"</dt>"+
      " <dt>"+datos.descripcion+"</dt>";
      if(datos.id_estado == 1){
        texto+="<dt>El servicio ya fue creado, pero aun no ha sido asignado a algun tecnico</dt>"+
        "<div class='progress'>"+
            "<div class='progress-bar' role='progressbar' style='width: 10%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>10%</div>"+
          "</div>"+
        "</dl>";
      }
      if(datos.id_estado == 2){
        texto+="<dt>El servicio ya fue creado y ha sido asignado a un tecnico, el proceso esta siendo procesado</dt>"+
        "<div class='progress'>"+
            "<div class='progress-bar' role='progressbar' style='width: 45%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>45%</div>"+
          "</div>"+
        "</dl>";
      }
      if(datos.id_estado == 3){
        texto+="<dt>El servicio ya ha sido finalizado y se encuentra en proceso de entrega</dt>"+
        "<div class='progress'>"+
            "<div class='progress-bar' role='progressbar' style='width: 100%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>100%</div>"+
          "</div>"+
        "</dl>";
      }
     let elemento : any = document.querySelector('#det');
     elemento.innerHTML = texto;
    });*/
  }
}
