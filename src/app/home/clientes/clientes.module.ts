import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClientesComponent } from './clientes.component';

import { VipComponent } from './vip/vip.component';
import { GoldComponent } from './gold/gold.component';

const routes: Routes = [
  {
    path: '', component: ClientesComponent,
    children: [
      { path: 'vip', component: VipComponent },
      { path: 'gold', component: GoldComponent }
    ]
  },
]

@NgModule({
  declarations: [
    ClientesComponent,
    VipComponent,
    GoldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ClientesModule { }
