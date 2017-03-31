import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { GlobalRef } from './global.provider';
import { GoogleMapApiWrapper } from './google-map-service/google-map-api.wrapper';
import { GoogleMapService } from './google-map-service/google-map.service';

@NgModule({
   providers: [
      GlobalRef,
      GoogleMapApiWrapper,
      GoogleMapService
   ]
})
export class CoreModule {
   constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
   }
}
