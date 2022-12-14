import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [

{path:'' , redirectTo:'home', pathMatch:'full'} , 
{path:'login' , component:LoginComponent},
{path:'home', component:HomeComponent},
{path:'signup' , component:SignupComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
