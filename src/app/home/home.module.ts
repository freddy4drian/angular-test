import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inicio'  },
      { path: 'inicio', component: InicioComponent },
      { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
      { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
