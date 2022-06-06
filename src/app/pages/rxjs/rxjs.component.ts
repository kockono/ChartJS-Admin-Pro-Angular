import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent {

  constructor() {

    const obs$ = new Observable(observable => {

      let i:number = 0;

        setInterval( () => {

          i++;
          observable.next(i);

        }, 1000)

    });

    obs$.subscribe( valor => console.log( 'subs:', valor )
    );

  }



}
