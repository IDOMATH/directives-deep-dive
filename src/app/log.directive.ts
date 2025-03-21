import { Directive, inject, ElementRef } from "@angular/core";

@Directive({
  selector: "[appLog]",
  standalone: true,
  host: { "(click)": "onLog()" },
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  onLog() {
    console.log("clicked");
    console.log(this.elementRef.nativeElement);
  }
}
