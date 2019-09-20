import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizeComponent } from './quize/quize.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {path : 'register', component: RegisterComponent},
  {path : 'quize', component: QuizeComponent, canActivate: [AuthGuard]},
  {path : 'result', component: ResultComponent, canActivate: [AuthGuard]},
  {path : '', redirectTo:'/register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
