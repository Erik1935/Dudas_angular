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
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
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
  formModal:any;
  editModal:any;
  fecha:any;
  visible:boolean = true;
  calendarOptions!: CalendarOptions;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;

  ngOnInit() {
    /*this.formModal = new window.bootstrap.Modal(
      document.getElementById("ventana_modal")
    )
    this.editModal = new window.bootstrap.Modal(
      document.getElementById("modal_editar")
    )*/
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
  openModal(){

    //$("#ventana_modal").modal('show');
    //let modal = document.getElementById("ventana_modal");
    //modal.style.display = "block";
  }
  closeModal(){
    this.formModal.hide()
  }
  openEditModal(){
    this.editModal.show()
  }
  closeEditModal(){
    this.editModal.hide()
  }

  handleDateClick(arg: DateClickArg) { 
   this.openModal();
    this.visible = true;
    console.log(arg.dateStr);
  }

  handleEventClick(arg: EventClickArg) {
    //console.log(arg.event.id);
    //this.openEditModal();
    this.metodo();
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
}
