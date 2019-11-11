import { Routes, RouterModule } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { DelegationsComponent } from './components/delegations/delegations.component';
import { TabActivitiesComponent } from './components/tab-activities/tab-activities.component';
import { PublicInfoComponent } from './components/public-info/public-info.component';
import { KeypersonsComponent } from './components/keypersons/keypersons.component';
import { AddressComponent } from './components/address/address.component';
import { OrgListComponent } from './components/org-list/org-list.component';
import { BankAccountsComponent } from './components/bank-accounts/bank-accounts.component';
import { AssessmentComponent } from './components/assessment/assessment.component';

const orgRoutes: Routes = [
    {
        path: '',
        component: OrganizationComponent,
        children: [
            { path: '', redirectTo: 'org-list', pathMatch: 'full' },
            { path: 'org-list', component: OrgListComponent},
            { path: 'public-info', component: PublicInfoComponent },
            { path: 'keypersons', component: KeypersonsComponent },
            { path: 'address', component: AddressComponent },
            { path: 'banck-accounts', component: BankAccountsComponent},
            { path: 'activities', component: TabActivitiesComponent },
            { path: 'delegations', component: DelegationsComponent },
            {path: 'assessments', component: AssessmentComponent}
        ]
    }
];

export const orgRouting = RouterModule.forChild(orgRoutes);
