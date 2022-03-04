import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 404 Not found component
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

// Modulos de rutas
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  // Tomara la primera ruta que cumple con el path vacio
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },

];



@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
