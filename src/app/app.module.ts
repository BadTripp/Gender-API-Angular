import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { ConvertitoreService } from './convertitore/convertitore.component.service';
import { ConvertiGenderPipe } from './gender/gender.transform.pipe';
import { FormsModule } from '@angular/forms';
import { ConvertitoreComponent } from './convertitore/convertitore.component';
import { PrimaMaiuscola } from './gender/prima.maiuscola.pipe';
import { ConvertiProb } from './gender/prob.transform.pipe';
import { GenderService } from './gender/gender.service';
import { BrowserModule } from '@angular/platform-browser';
import { GenderComponent } from './gender/gender.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ConvertitoreComponent,
    PrimaMaiuscola,
    ConvertiProb,
    ConvertiGenderPipe,
    GenderComponent,
    AppComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GenderService,ConvertitoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
