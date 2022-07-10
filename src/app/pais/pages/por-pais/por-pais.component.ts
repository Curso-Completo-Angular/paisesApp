import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  constructor(private paisService: PaisService) {}

  termino: string = '';
  hayError = false;

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        this.hayError = true;
        console.log(err);
        console.info(err);
      }
    );
  }
}
