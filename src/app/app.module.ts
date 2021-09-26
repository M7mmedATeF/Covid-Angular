import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { AboutComponent } from './about/about.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { SymptompsComponent } from './symptomps/symptomps.component';
import { WarningMSGComponent } from './warning-msg/warning-msg.component';
import { PreventComponent } from './prevent/prevent.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { DoDontComponent } from './do-dont/do-dont.component';
import { FAQComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { DarkComponent } from './dark/dark.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MobileNavComponent,
    AboutComponent,
    TransmissionComponent,
    SymptompsComponent,
    WarningMSGComponent,
    PreventComponent,
    TreatmentComponent,
    DoDontComponent,
    FAQComponent,
    NewsComponent,
    FooterComponent,
    DarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
