import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
   imports: [ SharedModule ],
   declarations: [ GoogleMapComponent ],
   exports: [ GoogleMapComponent ]
})
export class BuyersModule {}
