import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PausasComponent } from './components/pausas/pausas.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'nav', component: NavComponent},
  {path:'footer', component:FooterComponent},
  {path:'pausas', component: PausasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
