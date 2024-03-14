import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProyectoOneComponent } from './proyecto-one/proyecto-one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProyectoOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proyecto-uno';
}
