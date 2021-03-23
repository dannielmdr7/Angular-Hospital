import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent {
  titulo: string = '';
  tituloSubs$: Subscription;
  constructor(private router: Router) {
    this.tituloSubs$ = this.getRoutesData().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `AdminPro- ${titulo}`;
    });
  }
  getRoutesData() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
