import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") color:string = ''; 

  constructor(private el:ElementRef) { 
//el es todo el parrafo y los elementos que esten dentro del p tambien
  }

  // //Sin input
  // @HostListener('mouseenter') mouseEntro(){
  //   this.el.nativeElement.style.backgroundColor = 'yellow';
  // }
  // @HostListener('mouseleave') mouseSalio(){
  //   this.el.nativeElement.style.backgroundColor = 'white';
  // }


  //Con input
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.color || 'yellow');
  }
  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
