import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { orgRouting } from './organization.routing';
import { MatFormFieldModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddOrganizationComponent } from './dialogs/add-organization/add-organization.component';
import { OrganizationComponent } from './organization.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { InActivitiesComponent } from './components/in-activities/in-activities.component';
import { DelegationsComponent } from './components/delegations/delegations.component';
import { TabActivitiesComponent } from './components/tab-activities/tab-activities.component';

import { PublicInfoComponent } from './components/public-info/public-info.component';
import { KeypersonsComponent } from './components/keypersons/keypersons.component';
import { AddressComponent } from './components/address/address.component';

import { AddDelegationsComponent } from './dialogs/add-delegations/add-delegations.component';
import { DeleteOrganizationComponent } from './dialogs/delete-organization/delete-organization.component';
import { BankAccountsComponent } from './components/bank-accounts/bank-accounts.component';
import { AddAccountComponent } from './components/bank-accounts/dialogs/add-account/add-account.component';
import { BankEditComponent } from './components/bank-accounts/dialogs/bank-edit/bank-edit.component';
import { DeleteAccountComponent } from './components/bank-accounts/dialogs/delete-account/delete-account.component';
import { OrgListComponent } from './components/org-list/org-list.component';
import { AddKeypersonsComponent } from './dialogs/add-keypersons/add-keypersons.component';
import { AddOrganizationAddressComponent } from './dialogs/add-organization-address/add-organization-address.component';
import { MaterialModule } from 'src/app/mis/shared/modules/material/material.module';
import { SharedModule } from 'src/app/mis/shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    OrgListComponent,
    BankAccountsComponent,
    OrganizationComponent,
    AddOrganizationComponent,
    AssessmentComponent,
    ActivitiesComponent,
    InActivitiesComponent,
    DelegationsComponent,
    TabActivitiesComponent,
    PublicInfoComponent,
    KeypersonsComponent,
    AddressComponent,
    AddDelegationsComponent,
    DeleteOrganizationComponent,
    AddAccountComponent,
    BankEditComponent,
    DeleteAccountComponent,
    AddKeypersonsComponent,
    AddOrganizationAddressComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    CommonModule,
    orgRouting,
  ],
  entryComponents: [
    AddOrganizationComponent,
    DeleteOrganizationComponent,
    AddAccountComponent,
    BankEditComponent,
    DeleteAccountComponent,
    AddKeypersonsComponent,
    AddOrganizationAddressComponent
  ],
  providers: [

  ]
})
export class OrganizationModule { }
