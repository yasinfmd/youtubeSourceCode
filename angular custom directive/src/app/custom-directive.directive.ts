import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective  implements  OnInit{
  @Input() defaultColor:string="red"
  @HostBinding("style.backgroundColor") backgroundColor:string|undefined;
  constructor(private  elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
/*    this.elementRef.nativeElement.style.color="blue"
    this.elementRef.nativeElement.classList.add("customClassssss")*/
  //  console.log(this.elementRef.nativeElement.innerHTML)
   /* this.renderer.setStyle(this.elementRef.nativeElement,"color","red")
    this.renderer.setAttribute(this.elementRef.nativeElement,"data-id","30")*/
    this.elementRef.nativeElement.innerHTML="Custom" + " " + this.elementRef.nativeElement.innerHTML
  /*  this.renderer.listen(this.elementRef.nativeElement,"click",(event:PointerEvent)=>{
      console.log("Click Oldu")
    })*/

/*    this.elementRef.nativeElement.addEventListener("click",(e:PointerEvent)=>{
      console.log("her clicki yakalrımm" ,e)
    })*/
  }


  @HostListener("mouseenter") mouseenter(){
  //    this.elementRef.nativeElement.style.backgroundColor="red"
    console.log(this.defaultColor)
    this.backgroundColor=this.defaultColor
  }

  @HostListener("mouseleave") mouseout(){
    this.backgroundColor=""
   // this.elementRef.nativeElement.style.backgroundColor=""
  }
}
