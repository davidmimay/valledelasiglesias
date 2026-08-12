import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './services/theme';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly themeService = inject(ThemeService);
  readonly features = signal<FeatureItem[]>([
    {
      icon: 'schedule',
      title: 'Horarios de Culto',
      description: 'Consulta los horarios de misas diarias, confesiones y celebraciones especiales.',
      link: '/horarios'
    },
    {
      icon: 'groups',
      title: 'Grupos Parroquiales',
      description: 'Encuentra tu lugar en nuestros grupos de jóvenes, catequesis y voluntariado.',
      link: '/grupos'
    },
    {
      icon: 'handshake',
      title: 'Acción Social',
      description: 'Proyectos de ayuda y solidaridad con los más necesitados de la zona.',
      link: '/accion-social'
    }
  ]);
}
