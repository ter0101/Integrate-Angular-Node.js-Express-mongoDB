import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

//add new
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { DataService } from "./data.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
