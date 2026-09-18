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
      title: 'Misas Parroquia',
      description: 'Laborales: 20:00.\nSábados y Vísperas: 20:00.\nDomingos y festivos: 9:00, 12:00, 20:00',
      link: '/horarios'
    },
    {
      icon: 'church',
      title: 'Adoración Eucarística',
      description: 'Jueves 9:30 - 12:30.\n1º Sábado del mes 20:30 - 9:00',
      link: '/grupos'
    },
    {
      icon: 'groups',
      title: 'Santo Rosario',
      description: 'Todos los días antes de la Misa',
      link: '/grupos'
    },
    {
      icon: 'handshake',
      title: 'Confesiones',
      description: 'Media hora antes de la Misa y siempre que se solicite y pueda',
      link: '/accion-social'
    }
  ]);
}
