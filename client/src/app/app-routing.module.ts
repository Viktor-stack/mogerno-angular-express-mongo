import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { HomePageComponent } from './main/page/home-page/home-page.component'
import { AboutComponent } from './main/page/about/about.component'
import { UploadComponent } from './main/page/upload/upload.component'
import { NotFoundComponent } from './main/page/not-found/not-found.component'
import { ContactsPageComponent } from './main/page/contacts-page/contacts-page.component'
import { MainLayoutComponent } from './main/shared/components/main-layout/main-layout.component'
import { ProfilePageComponent } from './main/page/profile-page/profile-page.component'
import { WithdrawalsPageComponent } from './main/page/withdrawals-page/withdrawals-page.component'
import { AuthGuard } from './main/shared/services/auth.guard'

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactsPageComponent},
      {path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
      {path: 'profile/:id', component: ProfilePageComponent, canActivate: [AuthGuard]},
      {path: 'withdrawals', component: WithdrawalsPageComponent, canActivate: [AuthGuard]},
      {path: '404', component: NotFoundComponent}
    ]
  },

  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},

  {path: '', redirectTo: '/404', pathMatch: 'prefix'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
