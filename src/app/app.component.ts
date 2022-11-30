import { Component } from '@angular/core';
import { Tarta } from '../models/Tarta';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'TartasProject';
    tartas: Tarta[] = [];
    nombre: string = '';
    sabor: string = '';
    intolerancia: string = '';
    caloriasRacion: number = 0;
    precio: number = 0;
    numPorciones: number = 0;

    filtro: string = 'all';
    caloriasDieta: number = 0;

    addTarta() {
        this.tartas.push(
            new Tarta(
                this.nombre,
                this.sabor,
                this.intolerancia,
                this.caloriasRacion,
                this.precio,
                this.numPorciones
            )
        );
    }

    getImage(): string {
        return './assets/img/' + (Math.floor(Math.random() * 8) + 1) + '.jpg';
    }
}
