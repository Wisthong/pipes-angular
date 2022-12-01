import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SharedModule } from '@modules/shared/shared.module';
import { AppRouterModule } from './app.router.module';
import { VentasModule } from '@modules/ventas/ventas.module';

//FIXME: Cambiar el local de la app
import localeColombia from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeColombia);
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
