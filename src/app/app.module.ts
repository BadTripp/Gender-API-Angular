import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { ConvertiGenderPipe } from './gender/gender.transform.pipe';
import { FormsModule } from '@angular/forms';
import { PrimaMaiuscola } from './gender/prima.maiuscola.pipe';
import { ConvertiProb } from './gender/prob.transform.pipe';
import { GenderService } from './gender/gender.service';
import { BrowserModule } from '@angular/platform-browser';
import { GenderComponent } from './gender/gender.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
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
  providers: [GenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
