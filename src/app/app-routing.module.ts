import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSmestajComponent } from './components/add-smestaj/add-smestaj.component';
import { SmestajListingComponent } from './components/smestaj-listing/smestaj-listing.component';
import { ViewSmestajComponent } from './components/view-smestaj/view-smestaj.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista_smestaja', pathMatch: 'full' },
  { path: 'lista_smestaja', component: SmestajListingComponent },
  { path: 'add-smestaj', component: AddSmestajComponent },
  { path: 'view-smestaj/:id', component: ViewSmestajComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
