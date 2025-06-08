import { Component } from "@angular/core";
import { LogoComponent } from "../../../../shared/components/ui/logo/logo.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-landing-navbar",
    imports: [LogoComponent, RouterLink],
    templateUrl: "./landing-navbar.component.html",
    styleUrl: "./landing-navbar.component.css",
})
export class LandingNavbarComponent {}
