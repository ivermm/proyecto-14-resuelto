import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Todo } from './interfaces/todo.interface';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyecto-one',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    MatListModule,
  ],
  templateUrl: './proyecto-one.component.html',
  styleUrl: './proyecto-one.component.scss',
})
export class ProyectoOneComponent {
  /* propiedad para la data */
  todos: Todo[] = [];
  /* propiedad para la creacion del formulario reactivo */
  todoForm: FormGroup;
  /* propiedad para el contador de todo */
  private idCounter = 0;

  /* Primer metodo que se ejecutar, inicializar el contructor de formularios reactivos */
  constructor(private fb: FormBuilder) {
    /* Crear el formulario reactivo y añadir campos */
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    });
  }

  /* Metodo para añadir tarea */
  addTask() {
    /* añadir valor del input a una variable */
    const taskValue: string = this.todoForm.value.task;

    /* validar si en el input contiene un valor */
    if (taskValue) {
      /* definir la estructura y almacenarlo en una variable */
      const newTodo: Todo = { id: this.idCounter++, task: taskValue };
      /* añadir el dato definido al array */
      this.todos.push(newTodo);
      /* limpiar el input */
      this.todoForm.reset();
    }

    console.table(this.todos);
  }

  //Metodo para limpiar inputs
  clearTask(event: MouseEvent) {
    //prevenir que se recarge el navegador
    event.preventDefault();
    //hacer referencia al campo y limpiar el input
    this.todoForm.get('task')?.reset();
  }

  /* Metodo para eliminar tarea */
  removeTask(idTodo: number) {
    this.todos = this.todos.filter((todo) => todo.id !== idTodo);
    console.table(this.todos);
  }
}
