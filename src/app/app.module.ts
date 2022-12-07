import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import {MatButtonModule} from '@angular/material/button';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule } from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfileComponent } from './customer/customer-detail/profile/profile.component';
import { ContactComponent } from './customer/customer-detail/contact/contact.component';
import { BrandingDialogComponent } from './customer/customer-detail/profile/branding-dialog/branding-dialog.component';
import { ProfileDialogComponent } from './customer/customer-detail/profile/profile-dialog/profile-dialog.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { SubscriptionComponent } from './customer/customer-detail/subscription/subscription.component';
import { UsersComponent } from './customer/customer-detail/users/users.component';
import { FilesComponent } from './customer/customer-detail/files/files.component';
import { LogsComponent } from './customer/customer-detail/logs/logs.component';
import { AddContactComponent } from './customer/customer-detail/contact/add-contact/add-contact.component';
import {  DragDropModule} from '@angular/cdk/drag-drop';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BenchmarksComponent } from './customer/customer-detail/subscription/benchmarks/benchmarks.component';
import { PoliciesComponent } from './customer/customer-detail/subscription/policies/policies.component';
import { DeleteComponent } from './customer/delete/delete.component';
import { EditcontactComponent } from './customer/customer-detail/contact/editcontact/editcontact.component';
import { AddSubscriptionComponent } from './customer/customer-detail/subscription/add-subscription/add-subscription.component';
import { EditsubscriptionComponent } from './customer/customer-detail/subscription/editsubscription/editsubscription.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AddUsersComponent } from './customer/customer-detail/users/add-users/add-users.component';
import { EdituserComponent } from './customer/customer-detail/users/edituser/edituser.component';
import { FileseditComponent } from './customer/customer-detail/files/filesedit/filesedit.component';
import { UseremailComponent } from './customer/customer-detail/users/useremail/useremail.component';
import { UserlockComponent } from './customer/customer-detail/users/userlock/userlock.component';

import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { AddfilesComponent } from './customer/customer-detail/files/addfiles/addfiles.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    HeaderComponent,
    AddCustomerComponent,
    CustomerDetailComponent,
    ProfileComponent,
    ContactComponent,
    BrandingDialogComponent,
    ProfileDialogComponent,
    SubscriptionComponent,
    UsersComponent,
    FilesComponent,
    LogsComponent,
    AddContactComponent,
    BenchmarksComponent,
    PoliciesComponent,
    DeleteComponent,
    EditcontactComponent,
    AddSubscriptionComponent,
    EditsubscriptionComponent,
    AddUsersComponent,
    EdituserComponent,
    FileseditComponent,
    UseremailComponent,
    UserlockComponent,
    AddfilesComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,DragDropModule,MatProgressSpinnerModule,
    MatListModule,MatIconModule,MatToolbarModule,MatMenuModule,AppRoutingModule,MatFormFieldModule,FormsModule,
    ReactiveFormsModule,MatSelectModule,BrowserAnimationsModule,MatPaginatorModule,MatCheckboxModule,MatTableModule,
    MatExpansionModule,MatCardModule,MatInputModule,MatDatepickerModule,MatSlideToggleModule,MatChipsModule,
    MatDialogModule,MatButtonModule,MatProgressBarModule,MatTooltipModule,LayoutModule,FlexLayoutModule,MatGridListModule,
    MatSortModule,ColorPickerModule,NgCircleProgressModule.forRoot(), MatMomentDateModule
  ],
  exports: [
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent,CustomerComponent,ContactComponent]
})
export class AppModule { }
export class ApGridpModule { }
