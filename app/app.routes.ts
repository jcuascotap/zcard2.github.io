import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { OnboardingPageComponent } from './pages/onboarding-page/onboarding-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
    { path: 'Home', component: HomePageComponent },
    { path: 'About', component: AboutPageComponent },
    { path: 'Aplication', component: OnboardingPageComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule{}