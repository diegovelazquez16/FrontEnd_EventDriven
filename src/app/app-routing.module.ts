import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { HistorialComponent } from './components/historial/historial.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'historial', component: HistorialComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
