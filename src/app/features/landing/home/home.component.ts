import { Component } from "@angular/core";
import { LandingNavbarComponent } from "../components/landing-navbar/landing-navbar.component";

@Component({
    selector: "app-home",
    imports: [LandingNavbarComponent],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent {}
