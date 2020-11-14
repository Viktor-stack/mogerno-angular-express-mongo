import { NgModule, Provider } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthGuard } from '../main/shared/services/auth.guard'
import { AdminGuard } from './services/admin.guard'
import { UsersPageComponent } from './users-page/users-page.component'
import { PreloaderComponent } from './shared/components/preloader/preloader.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AdminService } from './services/admin.service'
import { AuthInterceptor } from './services/auth.interceptor';
import { UserComponent } from './users-page/user/user.component';
import { UserDetailsComponent } from './users-page/user-details/user-details.component'

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AdminLayoutComponent,
    UsersPageComponent,
    PreloaderComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, canActivate: [AuthGuard, AdminGuard], children: [
          {path: 'users', component: UsersPageComponent},
          {path: 'user/:id', component: UserDetailsComponent}
        ]
      }
    ])
  ],
  providers: [INTERCEPTOR_PROVIDER, AdminGuard, AdminService],
  exports: [RouterModule]
})
export class AdminModule {
}
