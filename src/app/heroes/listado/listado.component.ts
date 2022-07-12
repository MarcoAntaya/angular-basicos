import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  // constructor() { 

  //   console.log('construcctor');
  // }

  // ngOnInit(): void {

  //   console.log('ngOnInit');
  // }

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  
  heroeBorrado:string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    

  }


}
