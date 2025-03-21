import { Directive, input, inject, ElementRef } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
  host: { "(click)": "onDirectiveClicked($event)" },
})
export class SafeLinkDirective {
  queryParam = input("myapp", { alias: "appSafeLink" });
  constructor() {
    console.log("SafeLinkDirective is active!");
  }

  onDirectiveClicked(event: MouseEvent) {
    const wantsToLeave = window.confirm("Do you want to leave the app?");
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =
        address + "?from=m" + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
