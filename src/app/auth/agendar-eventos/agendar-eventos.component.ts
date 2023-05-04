import { Component, OnInit, ViewChild, forwardRef} from '@angular/core';
import { CalendarOptions, Calendar, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg} from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { EventInput } from '@fullcalendar/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendar-eventos',
  templateUrl: './agendar-eventos.component.html',
  styleUrls: ['./agendar-eventos.component.css']
})
export class AgendarEventosComponent implements OnInit {
  //constructor(private servicio: AgendarService){

  //}
  nombreAreas: any[] = [];
  usuario :any = {};
  fechaActual = new Date().toISOString().slice(0, 10);
  
  
  
    formServicio = new FormGroup({
      'titulo': new FormControl('',Validators.required),
      'nombre_completo': new FormControl('',Validators.required),
      'id_area': new FormControl('',Validators.required),
      'descripcion': new FormControl('',Validators.required),
      'fecha_inicio': new FormControl('',Validators.required),
      'hora_inicio':new FormControl('',Validators.required),
      'color': new FormControl('',Validators.required)
    })
  
    events: EventInput[] = [
      {title:'Evento',date:'2023-04-08'}
    ];
  
    fecha:any;
    visible:boolean = true;
    calendarOptions!: CalendarOptions;
    eventsModel: any;
    @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;
  
    nuevoServicio(){
      this.usuario.titulo = this.formServicio.value.titulo;
      this.usuario.nombre_completo = this.formServicio.value.nombre_completo;
      this.usuario.id_area = this.formServicio.value.id_area;
      this.usuario.descripcion = this.formServicio.value.descripcion;
      this.usuario.fecha_inicio = this.formServicio.value.fecha_inicio+"T"+this.formServicio.value.hora_inicio;
      this.usuario.color = this.formServicio.value.color;
    
      /*this.servicio.insertService(this.usuario).subscribe(
        (response) => {
          Swal.fire({
            title: '<strong>Token de Servicio</strong>',
            icon: 'info',
            html:
              ''+response.token+' , Con este token puedes monitorear el estado del servicio que agendaste'          
            ,
            showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Entendido!'
          })
        }
      );*/
  
      
    }
  
    ngOnInit():void {
     /* this.servicio.getAreas().subscribe(datos => {
        this.nombreAreas = datos;
      });*/
   
      // need for load calendar bundle first
      forwardRef(() => Calendar);
  
      this.calendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        editable: false,
        locale:esLocale,
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth'
        },
        dateClick: this.handleDateClick.bind(this),
        eventClick: this.handleEventClick.bind(this),
        events: this.events
      };
    }
   
    //Metodo al dar clic en una fecha, si sera utilizado
    handleDateClick(arg: DateClickArg) { 
  
      this.visible = true;
      this.formServicio.get('fecha_inicio')?.setValue(arg.dateStr);
    }
    //Metodo al dar click en un evento, no sera utilizado
    handleEventClick(arg: EventClickArg) {
     
    }
  
   
  
    updateHeader() {
      this.calendarOptions!.headerToolbar = {
        left: 'prev,next',
        center: 'title',
        right: ''
      };
    }
  
    updateEvents() {
      const nowDate = new Date();
      const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);
  
      this.calendarOptions!.events = [{
        title: 'Updated Event',
        start: yearMonth + '-08',
        end: yearMonth + '-10'
      }];
    }
    formatoFecha(fecha:any){
      if(fecha < 10){
        fecha = "0"+fecha;
      }
      return fecha;
    }
    metodo(){
      this.events = [];
      this.calendarOptions.events = this.events;
      this.events = [ {title:'Evento',date:'2023-04-09'}];
      this.calendarOptions.events = this.events;
    }
    getMesActual(){
      let fecha = "";
      if(new Date().getMonth()<10){
        fecha+="0"+new Date().getMonth()+"-";
      }else{
        fecha+=new Date().getMonth()+"-";
      }
      return fecha;
    }
    getDiaActual(){
      let fecha = "";
      if(new Date().getDay()<10){
        fecha+="0"+new Date().getDay();
      }else{
        fecha+=new Date().getDay();
      }
      return fecha;
    }
    compararFecha(){
      if(!(this.formServicio.invalid)){
        this.nuevoServicio();
        this.formServicio.reset();
        return;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Aun faltan campos por llenar!'
      })
    }
}
