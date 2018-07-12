import { Component } from "@angular/core";

//add
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private result: Array<any>;
  private name:string;
  private price:number;

  constructor(private dataService: DataService) {
    this.onLoad();
  }
  onAdd(){
    this.dataService.addLibrary(this.name,this.price).subscribe(res=>{
      this.onLoad();
    });
  }
  onLoad() {
    this.dataService.getLibrary().subscribe(res => {
      this.result = res;
    });
  }
  onDelete(id){
    this.dataService.deleteBook(id).subscribe(res=>{
      this.onLoad();
    })
  }
}
