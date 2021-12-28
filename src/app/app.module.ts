import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { AddSmestajComponent } from './components/add-smestaj/add-smestaj.component';
import { SingleSmestajComponent } from './components/single-smestaj/single-smestaj.component';
import { SmestajListingComponent } from './components/smestaj-listing/smestaj-listing.component';
import { ViewSmestajComponent } from './components/view-smestaj/view-smestaj.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    AddSmestajComponent,
    SingleSmestajComponent,
    SmestajListingComponent,
    ViewSmestajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
