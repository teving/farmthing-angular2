import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMapService } from './shared/google-map.service';

@NgModule({
   imports: [ SharedModule ],
   declarations: [ GoogleMapComponent ],
   exports: [ GoogleMapComponent ],
   providers: [ GoogleMapService ]
})
export class BuyersModule {}
