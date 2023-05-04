import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraficosService {
  constructor(private loginService: LoginService, private http: HttpClient) {}
  validarRol() {
    return this.loginService.getRolUser() == 'Admin' ? true : false;
  }
  //Mostrar numeros de cuadros de colores
  public loadContentByRol():Observable<any>{
    return this.loginService.getRolUser()=="User"?
    this.http.get<any>('http://localhost:8080/Estadisticas/User/'+this.loginService.getIdUser()):
    this.http.get<any>('http://localhost:8080/Estadisticas');
   }
  mostrarDatosPrimerGrafico(): Observable<any> {
    if (this.validarRol()) {
      return this.http.get<any>('http://localhost:8080/Estadisticas/Año');
     
    } else {
      return this.http.get<any>(
        'http://localhost:8080/Estadisticas/Año/' +
          this.loginService.getIdUser()
      );
    }
  }
  mostrarDatosSegundoGrafico() {
    if (this.validarRol()) {
      return this.http.get<any>('http://localhost:8080/Estadisticas/Mes');
    } else {
      return this.http.get<any>(
        'http://localhost:8080/Estadisticas/Mes/' +
          this.loginService.getIdUser()
      );
    }
  }
  mostrarDatosTercerGrafico() {
    return this.http.get<any>('http://localhost:8080/Estadisticas/User/Mes');
  }
  mostrarDatosCuartoGrafico() {
    return this.http.get<any>('http://localhost:8080/Estadisticas/User/Año');
  }
}
