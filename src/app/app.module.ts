import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { DailyGraphicComponent } from './views/pages/daily-graphic/daily-graphic.component';
import { HourlyGraphicComponent } from './views/pages/hourly-graphic/hourly-graphic.component';
import { MinutelyGraphicComponent } from './views/pages/minutely-graphic/minutely-graphic.component';
import { DummyPageComponent } from './views/pages/dummy-page/dummy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyGraphicComponent,
    HourlyGraphicComponent,
    MinutelyGraphicComponent,
    DummyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
