import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Provider } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './main/header/header.component'
import { FooterComponent } from './main/footer/footer.component'
import { HeaderMenuComponent } from './main/header/header-menu/header-menu.component'
import { HomePageComponent } from './main/page/home-page/home-page.component'
import { SearchComponent } from './main/components/search/search.component'
import { PreloaderComponent } from './main/components/preloader/preloader.component'
import { ProductComponent } from './main/components/product/product.component'
import { SliderComponent } from './main/components/slider/slider.component'
import { AdvantagesComponent } from './main/components/advantages/advantages.component'
import { AuthorComponent } from './main/components/author/author.component'
import { TutorialsComponent } from './main/components/tutorials/tutorials.component'
import { AboutComponent } from './main/page/about/about.component'
import { UserComponent } from './main/components/user/user.component'
import { SearcAboutComponent } from './main/page/about/components/searc-about/searc-about.component'
import { BreadcrumbsComponent } from './main/components/breadcrumbs/breadcrumbs.component'
import { AboutUsComponent } from './main/page/about/components/about-us/about-us.component'
import { UploadComponent } from './main/page/upload/upload.component'
import { NotFoundComponent } from './main/page/not-found/not-found.component'
import { ContactsPageComponent } from './main/page/contacts-page/contacts-page.component'
import { ModalComponent } from './main/components/modal/modal.component'
import { MainLayoutComponent } from './main/shared/components/main-layout/main-layout.component'
import { ProfilePageComponent } from './main/page/profile-page/profile-page.component'
import { WithdrawalsPageComponent } from './main/page/withdrawals-page/withdrawals-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthInterceptor } from './main/shared/services/auth.interceptor'
import { AuthService } from './main/shared/services/auth.service'
import { CommonModule } from '@angular/common'
import { AsideComponent } from './main/components/aside/aside.component';
import { RegisterPageComponent } from './main/page/register-page/register-page.component'

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    HomePageComponent,
    SearchComponent,
    PreloaderComponent,
    ProductComponent,
    SliderComponent,
    AdvantagesComponent,
    AuthorComponent,
    TutorialsComponent,
    AboutComponent,
    UserComponent,
    SearcAboutComponent,
    BreadcrumbsComponent,
    AboutUsComponent,
    UploadComponent,
    NotFoundComponent,
    ContactsPageComponent,
    ModalComponent,
    MainLayoutComponent,
    ProfilePageComponent,
    WithdrawalsPageComponent,
    AsideComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [INTERCEPTOR_PROVIDER, AuthService],
  exports: [
    PreloaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
