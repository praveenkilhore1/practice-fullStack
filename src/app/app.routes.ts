import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { FaqComponent } from './components/faq/faq.component';

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const routes: Routes = [

    { path: '', title: 'Home Page', component: HomeComponent},
    { path: 'login', title: 'Login Page', component: LoginComponent },
    { path: 'faq', title: 'FAQ Page', component: FaqComponent },
    { path: 'help', title: 'Help Page', component: HelpComponent}
]

  