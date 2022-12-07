import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './customer/customer-detail/contact/contact.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { FilesComponent } from './customer/customer-detail/files/files.component';
import { LogsComponent } from './customer/customer-detail/logs/logs.component';
import { ProfileComponent } from './customer/customer-detail/profile/profile.component';
import { SubscriptionComponent } from './customer/customer-detail/subscription/subscription.component';
import { UsersComponent } from './customer/customer-detail/users/users.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',redirectTo: '/home/customer', pathMatch: 'full' },
  {
    path:"home",
    component:HomeComponent,
    children:[
      { path: '',redirectTo: '/customer', pathMatch: 'full' },
      {path:"customer",component:CustomerComponent},
      {path:"customer-deatil",component:CustomerDetailComponent,
        children:[
          { path: '',redirectTo: '/profile', pathMatch: 'full' },
          { path: '',redirectTo: '/subscription', pathMatch: 'full' },
          { path: '',redirectTo: '/contacts', pathMatch: 'full' },
          {path:"profile",component:ProfileComponent},
          {path:"contact",component:ContactComponent},
          {path:"subscription",component:SubscriptionComponent},
          {path:"users",component:UsersComponent},
          {path:"files",component:FilesComponent},
          {path:"logs",component:LogsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
