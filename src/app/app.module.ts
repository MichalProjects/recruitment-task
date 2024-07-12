import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { TitleComponent } from './components/header/title/title.component';
import { BlokPierwszyComponent } from './components/main/blok-pierwszy/blok-pierwszy.component';
import { BlokDrugiComponent } from './components/main/blok-drugi/blok-drugi.component';
import { BlokTrzeciComponent } from './components/main/blok-trzeci/blok-trzeci.component';
import { OptionsComponent } from './components/footer/options/options.component';
import { OptionComponent } from './components/footer/options/option/option.component';
import { RadioOptionComponent } from './components/main/blok-pierwszy/radio-option/radio-option.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LogoComponent,
    TitleComponent,
    BlokPierwszyComponent,
    BlokDrugiComponent,
    BlokTrzeciComponent,
    OptionsComponent,
    OptionComponent,
    RadioOptionComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
