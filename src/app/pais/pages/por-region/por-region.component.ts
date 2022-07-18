import { Component, OnInit } from '@angular/core'
import { PaisService } from '../../services/pais.service'
import { Country } from '../../interfaces/pais.interface'

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva: string = ''
  paises: Country[] = []
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    this.regionActiva = region
    this.paisService.getPaisesPorRegion(region).subscribe((response) => {
      this.paises = response
      console.log(this.paises)
    })
  }
}
