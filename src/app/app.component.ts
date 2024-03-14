import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProyectoOneComponent } from './proyecto-one/proyecto-one.component';
import { ProyectoDosComponent } from './proyecto-dos/proyecto-dos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProyectoOneComponent, ProyectoDosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
