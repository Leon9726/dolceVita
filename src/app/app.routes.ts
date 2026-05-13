import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from "./components/login/login.component";
import {AnnouncementsComponent} from "./components/announcements/announcements.component";
import {AutonoleggioComponent} from "./components/service-detail/autonoleggio.component";

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home', component: HomeComponent
    },
    {path: 'about', component: AboutComponent},
    {
        path: 'services',
        children: [
            // Se l'utente va su /services esatto, vede la lista dei servizi
            { path: '', component: ServicesComponent, pathMatch: 'full' },

            // Se va su /services/autonoleggio, vede il dettaglio!
            { path: 'autonoleggio', component: AutonoleggioComponent }
        ]
    },
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'annunci', component: AnnouncementsComponent},
    {path: '**', redirectTo: '/home'}
];
