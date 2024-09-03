import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
// import { LoginComponent } from './pages/login/login.component';
// import { authGuard } from './shared/auth/auth.guard';
// import { RegisterComponent } from './pages/register/register.component';
// import { socialMediaResolver } from './shared/resolvers/social-media.resolver';
import { CreateLinkModalComponent } from './pages/create_link_modal/create-link-modal.component'; // Yeni bileşeni import et


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, title: 'Anasayfa' },
   
    { path: 'about-us', component: AboutUsComponent, title: 'Hakkımızda' },
    // { path: 'login', component: LoginComponent, title: 'Rast Mobile Angular Giriş' },
    // { path: 'register', component: RegisterComponent, title: 'Rast Mobile Angular Kayıt' },
    { path: 'create-link', component: CreateLinkModalComponent, title: 'Yeni Sosyal Medya Linki Ekle' }, // Yeni rota

];
