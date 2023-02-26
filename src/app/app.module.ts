import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserDialogComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
