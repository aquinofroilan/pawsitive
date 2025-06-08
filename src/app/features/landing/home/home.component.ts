import { Component } from "@angular/core";
import { LandingNavbarComponent } from "../components/landing-navbar/landing-navbar.component";
import { SharedModule } from "../../../shared/shared.module";
import { HeroSectionComponent } from "../components/hero-section/hero-section.component";

@Component({
    selector: "app-home",
    imports: [LandingNavbarComponent, SharedModule, HeroSectionComponent],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent {}
