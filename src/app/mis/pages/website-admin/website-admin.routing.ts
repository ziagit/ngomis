import { WebsiteAdminComponent } from './website-admin.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { Routes, RouterModule } from "@angular/router";
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { OrganizationLawsComponent } from './components/organization-laws/organization-laws.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { OrgRegisterationComponent } from './components/org-registeration/org-registeration.component';
import { BiographyComponent } from './components/biography/biography.component';


const routes: Routes = [
    {
        path: '',
        component: WebsiteAdminComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'org-registeration', component: OrgRegisterationComponent },
            { path: 'news', component: NewsComponent },
            { path: 'org-laws', component: OrganizationLawsComponent },
            { path: 'jobs', component: JobsComponent },
            { path: 'contact-us', component: ContactUsComponent },
            { path: 'biography', component: BiographyComponent},
        ]
    }
]
export const routing = RouterModule.forChild(routes);