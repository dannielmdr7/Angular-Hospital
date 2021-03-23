import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription = new Subscription();
  constructor() {
    // this.retornaObservable()
    //   .pipe(retry())
    //   .subscribe(
    //     (valor) => console.log('Subs: ', valor),
    //     (err) => console.warn('Error en el Observable'),
    //     () => console.info('Observable Terminado')
    //   );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(300).pipe(
      // take(10),
      map((number) => number + 1),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('I llegó al valor de 2');
        }
        observer.next(i);
      }, 1000);
    });
    return obs$;
  }
}
