import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingChildComponent } from './event-binding-child/event-binding-child.component';
import { EventBindingParentComponent } from './event-binding-parent/event-binding-parent.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    PropertyBindingComponent,
    EventBindingParentComponent,
    EventBindingChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
