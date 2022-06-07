import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent {

  constructor() {

    // this.retornarObservable().pipe(
    //   retry(2) // Aquí le pasamos el numero de intentos hasta que logre el complete
    // ).subscribe(
    //   valor => console.log( 'subs:', valor ),
    //   error => console.log( 'Error', error ),
    //   () => console.log( 'Obs Terminado' )
    // );

    this.retornaIntervalo().subscribe(console.log);

  }

  retornaIntervalo() {

    const intervalo = interval(1000).pipe( take(4), map( valor => valor + 1 ) );

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
