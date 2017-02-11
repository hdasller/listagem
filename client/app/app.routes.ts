import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';



const appRoutes: Routes  = [
  { path: '', component: ListagemComponent },
  { path: ':pagina', component: ListagemComponent },
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);