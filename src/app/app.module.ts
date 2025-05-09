import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateDesignerComponent } from './template-designer/template-designer.component';
import { FormsModule } from '@angular/forms';
import { ResumeDesignerComponent } from './resume-designer/resume-designer.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDesignerComponent,
    ResumeDesignerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
     MatInputModule,
      MatSelectModule,
      FormsModule  ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
