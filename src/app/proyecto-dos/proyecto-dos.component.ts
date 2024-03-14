import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface SurveyResult {
  [key: string]: number;
}

@Component({
  selector: 'app-proyecto-dos',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './proyecto-dos.component.html',
  styleUrl: './proyecto-dos.component.scss',
})
export class ProyectoDosComponent {
  /* definir el formulario reactivo */
  surveyForm: FormGroup;
  /* propiedad donde colocamos el titulo */
  question: string = 'Cual es tu lenguaje favorito';
  /* array de opciones de la encuesta */
  options: string[] = ['Javascript', 'Python', 'Typescript', 'Java', 'c#'];
  /* Objeto donde se almacenan los resultados sumados */
  results: SurveyResult = {};

  /* Definimos y creamos el formulario reactivo */
  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      favoriteLanguje: [],
    });
  }

  /* Devuelve true o false dependiendo si existe un key en el objeto */
  get HasResult(): boolean {
    return Object.keys(this.results).length > 0;
  }

  /* metodo para calcular la cantidad de opciones selecionadas */
  submit(): void {
    /* añadir el valor seleccionado a una variable */
    const selectLanguaje: string = this.surveyForm.value.favoriteLanguje;

    /* validar cuando no exista un valor seleccionado */
    if (!selectLanguaje) {
      console.error('No se selecciono un lenguaje de programacion');
      return;
    }

    /* algoritmos para calcular las coincidencias de las opciones selecionadas */
    if (!this.results[selectLanguaje]) {
      this.results[selectLanguaje] = 1;
    } else {
      this.results[selectLanguaje]++;
    }
    /* debugear el resultado */
    console.log(this.results);
    /* limpiar los radio buttons */
    this.surveyForm.reset();
  }
}
