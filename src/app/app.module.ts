import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BuyersModule } from './buyers/buyers.module';

@NgModule({
   imports: [
      BrowserModule,
      CoreModule,
      BuyersModule
   ],
   declarations: [ AppComponent ],
   bootstrap: [ AppComponent ]
})
export class AppModule {}
