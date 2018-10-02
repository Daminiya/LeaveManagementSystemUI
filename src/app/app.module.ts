import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CreateUserComponent } from './views/user/create-user/create-user.component';
import { ViewUserComponent } from './views/user/view-user/view-user.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { EditLoginComponent } from './views/login/edit-login/edit-login.component';
import { EditUserComponent } from './views/user/edit-user/edit-user.component';
import { CreateDepartmentComponent } from './views/department/create-department/create-department.component';
import { EditDepartmentComponent } from './views/department/edit-department/edit-department.component';
import { ViewDepartmentComponent } from './views/department/view-department/view-department.component';
import { CreateRoleComponent } from './views/role/create-role/create-role.component';
import { ViewRoleComponent } from './views/role/view-role/view-role.component';
import { EditRoleComponent } from './views/role/edit-role/edit-role.component';
import { CreateHolidayComponent } from './views/holiday/create-holiday/create-holiday.component';
import { EditHolidayComponent } from './views/holiday/edit-holiday/edit-holiday.component';
import { ViewHolidayComponent } from './views/holiday/view-holiday/view-holiday.component';
import { CreateLeaveTypeComponent } from './views/leave_type/create-leave-type/create-leave-type.component';
import { EditLeaveTypeComponent } from './views/leave_type/edit-leave-type/edit-leave-type.component';
import { ViewLeaveTypeComponent } from './views/leave_type/view-leave-type/view-leave-type.component';
import { CreateStatusComponent } from './views/status/create-status/create-status.component';
import { EditStatusComponent } from './views/status/edit-status/edit-status.component';
import { ViewStatusComponent } from './views/status/view-status/view-status.component';
import { ViewCarryForwardComponent } from './views/carry_forward/view-carry-forward/view-carry-forward.component';
import { CreateCarryForwardComponent } from './views/carry_forward/create-carry-forward/create-carry-forward.component';
import { EditCarryForwardComponent } from './views/carry_forward/edit-carry-forward/edit-carry-forward.component';
import { ApplyLeaveRequestComponent } from './views/leave_request/apply-leave-request/apply-leave-request.component';
import { ViewLeaveRequestComponent } from './views/leave_request/view-leave-request/view-leave-request.component';
import { RejectLeaveRequestComponent } from './views/leave_request/reject-leave-request/reject-leave-request.component';
import { ApplyCancelLeaveRequestComponent } from './views/cancel_leave_request/apply-cancel-leave-request/apply-cancel-leave-request.component';
import { ViewCancelLeaveRequestComponent } from './views/cancel_leave_request/view-cancel-leave-request/view-cancel-leave-request.component';
import { ApplyCarryForwardRequestComponent } from './views/carry_forward/apply-carry-forward-request/apply-carry-forward-request.component';
import { ViewCarryForwardRequestComponent } from './views/carry_forward/view-carry-forward-request/view-carry-forward-request.component';
import { RejectCarryForwardRequestComponent } from './views/carry_forward/reject-carry-forward-request/reject-carry-forward-request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CreateUserComponent,
    ViewUserComponent,
    LoginPageComponent,
    EditLoginComponent,
    EditUserComponent,
    CreateDepartmentComponent,
    EditDepartmentComponent,
    ViewDepartmentComponent,
    CreateRoleComponent,
    ViewRoleComponent,
    EditRoleComponent,
    CreateHolidayComponent,
    EditHolidayComponent,
    ViewHolidayComponent,
    CreateLeaveTypeComponent,
    EditLeaveTypeComponent,
    ViewLeaveTypeComponent,
    CreateStatusComponent,
    EditStatusComponent,
    ViewStatusComponent,
    ViewCarryForwardComponent,
    CreateCarryForwardComponent,
    EditCarryForwardComponent,
    ApplyLeaveRequestComponent,
    ViewLeaveRequestComponent,
    RejectLeaveRequestComponent,
    ApplyCancelLeaveRequestComponent,
    ViewCancelLeaveRequestComponent,
    ApplyCarryForwardRequestComponent,
    ViewCarryForwardRequestComponent,
    RejectCarryForwardRequestComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
