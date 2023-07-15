import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state/global-state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class GlobalStateModule {}
