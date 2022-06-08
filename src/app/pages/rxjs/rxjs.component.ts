import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    // this.retornarObservable().pipe(
    //   retry(2) // Aquí le pasamos el numero de intentos hasta que logre el complete
    // ).subscribe(
    //   valor => console.log( 'subs:', valor ),
    //   error => console.log( 'Error', error ),
    //   () => console.log( 'Obs Terminado' )
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo() {

    const intervalo = interval(500).pipe( take(10),
                                          map( valor => valor + 1 ),
                                          filter( valor => (valor % 2  === 0) ? true : false )
                                        );

    return intervalo;
  }

  retornarObservable(): Observable<number> {
    let i:number = -1;

    const obs$ = new Observable<number>(observable => {

        const intervale = setInterval( () => {

          i++;
          observable.next(i);

          if( i === 4 ) {
            clearInterval(intervale);
            observable.complete();
          }

          if( i === 2 ) {
            clearInterval(intervale);
            observable.error();
          }

        }, 1000)

    });
    return obs$;
  }

}
