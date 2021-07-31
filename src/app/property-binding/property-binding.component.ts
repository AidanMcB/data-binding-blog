import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
  public puppyImagePath: string = '../../assets/puppyImage.jpg';
  public imageHeight: number = 150;
  public imageWidth: number = 125;
  public labelIsRed: boolean = true;
  public multipleClasses: string = "red-bg lg flex"
  public objectClass: any = { orange: true, sm: false, flex: false}
  public arrayofClasses: string[] = ['red-bg', 'lg', 'flex']
  constructor() { }

  ngOnInit(): void {
  }

  public toggleImageSize():void {
    this.imageHeight = this.imageHeight == 150 ? 90 : 150;
    this.imageWidth = this.imageWidth == 125 ? 60 : 125; 
  }

  public changeLabelColor():void{
    this.labelIsRed = !this.labelIsRed;
  }

}
