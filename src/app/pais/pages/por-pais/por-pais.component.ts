import { Component } from '@angular/core'
import { Country } from '../../interfaces/pais.interface'
import { PaisService } from '../../services/pais.service'

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  constructor(private paisService: PaisService) {}

  termino: string = ''
  hayError = false
  paises: Country[] = []
  paisesSugeridos: Country[] = []

  buscar(termino: string) {
    this.hayError = false
    this.termino = termino
    console.log(this.termino)
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises)
        this.paises = paises
      },
      (err) => {
        this.hayError = true
        this.paises = []
        console.log(err)
        console.info(err)
      },
    )
  }
  sugerencias(termino: string) {
    this.hayError = false
    this.paisService.buscarPais(termino).subscribe(
      (res) => {
        this.paisesSugeridos = res
      },
      (err) => {
        this.paisesSugeridos = []
      },
    )
  }
}
