import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  public titulo:string = '';
  public tituloSubs$: Subscription;

  constructor( private router: Router,
               private route: ActivatedRoute
    ) {
      // route.snapshot.data // Accede a la ruta padre
      // console.log( route.snapshot.children[0].data ) // Accede a la ruta padre

      this.tituloSubs$ = this.getRouteArguments().subscribe( ({ titulo }) => {
        this.titulo = titulo
        document.title = titulo;  // Pone el titulo en la pestaña del navegador
      });
    }

    getRouteArguments() {
    return  this.router.events
                  .pipe(
                   filter(event => event instanceof ActivationEnd),
                   filter((event:ActivationEnd) => event.snapshot.firstChild == null),
                   map((event:ActivationEnd) => event.snapshot.data)
      )
    }

    ngOnDestroy(): void {
      this.tituloSubs$.unsubscribe();
    }

    ngOnInit(): void {
      console.log(  )

    }

}
