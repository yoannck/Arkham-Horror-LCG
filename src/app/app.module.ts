import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { Pipe, PipeTransform } from '@angular/core';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { MomentModule } from 'angular2-moment';

import { HomepageComponent } from './homepage.component';
import { ArhkamHorrorService } from './ah.service';

@Pipe({ name: 'newline' })
export class NewlinePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    return (value) ? value.replace(/(?:\r\n|\r|\n)/g, '<br />') : value;
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewlinePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    Ng2PaginationModule,
    MomentModule,
    RouterModule.forRoot(AppRoutes),
    MaterialModule
  ],
  entryComponents: [],
  providers: [
    ArhkamHorrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
