import {
  Directive,
  input,
  inject,
  effect,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { Permission } from "./auth.model";
import { AuthService } from "./auth.service";

@Directive({
  selector: "[appAuth]",
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: "appAuth" });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewcontainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewcontainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewcontainerRef.clear();
      }
    });
  }
}
