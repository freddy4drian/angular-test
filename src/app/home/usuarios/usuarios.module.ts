import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UsuariosComponent } from './usuarios.component';

import { NewUserComponent } from './new-user/new-user.component';
import { RolComponent } from './rol/rol.component';

const routes: Routes = [
    { 
        path: '', component: UsuariosComponent,
        children: [
            {path: 'new-user', component: NewUserComponent},
            {path: 'rol', component: RolComponent}
        ]
    },
]

@NgModule({
    declarations: [
      UsuariosComponent,
      NewUserComponent,
      RolComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(routes),
    ]
  })
  export class UsuariosModule { }