import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmestajComponent } from './smestaj/smestaj.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { AddSmestajComponent } from './components/add-smestaj/add-smestaj.component';

@NgModule({
  declarations: [
    AppComponent,
    SmestajComponent,
    FilterPipePipe,
    AddSmestajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
