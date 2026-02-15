import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDatabase,
  faDisplay,
  faFlask,
  faCloud,
  faNetworkWired,
  IconDefinition,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { ResponsiveService } from '../responsive.service';

interface Skill {
  type: string;
  icon: IconDefinition;
  items: string;
}

@Component({
  selector: 'app-skills',
  imports: [FontAwesomeModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  readonly responsive = inject(ResponsiveService);

  faDisplay = faDisplay;
  faDatabase = faDatabase;
  faFlask = faFlask; // flask-gear pro
  faCloud = faCloud; // cloud-binary pro
  faNetworkWired = faNetworkWired; // cloud-binary pro

  skills: Skill[] = [
    {
      type: 'frontend',
      icon: faDisplay,
      items:
        'React, Angular, Material UI, GoJS, MobX, TanStack, HighCharts, Zustand',
    },
    {
      type: 'backend',
      icon: faDatabase,
      items:
        'NodeJS, Vite, Jenkins, SpringBoot, NGINX, AWS, Gunicorn, NestJS, Flask',
    },
    {
      type: 'testing',
      icon: faFlask,
      items:
        'Playwright, Cypress, Mockito, React Testing Library, Pact, Jest, ESLint',
    },
    {
      type: 'devOps & cloud',
      icon: faCloud,
      items:
        'AWS (S3, CloudFront, Route 53, Amplify), Jenkins, ArgoCD, Docker, Helm, Ansible, Splunk, Grafana, secrets management',
    },
    {
      type: 'networking',
      icon: faNetworkWired,
      items:
        'Scripting & Automation (Bash, PowerShell), Subnetting & VLANs, Linux &Windows Server Administration, Disaster Recovery Planning',
    },
  ];

  openType: string | null = null;

  chevronIcon(i: number, skill: Skill): IconDefinition {
    const isOpen = this.openType === skill.type;
    return isOpen
      ? faChevronDown
      : i % 2 === 0
        ? faChevronRight
        : faChevronLeft;
  }

  onToggle(id: string, ev: MouseEvent) {
    ev.preventDefault();
    this.openType = this.openType === id ? null : id;
  }
}
