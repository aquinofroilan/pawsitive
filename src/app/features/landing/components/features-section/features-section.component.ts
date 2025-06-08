import { Component } from "@angular/core";
import { BadgeComponent } from "../../../../shared/components/ui/badge/badge.component";
import { CardComponent } from "../../../../shared/components/ui/card/card.component";

@Component({
    selector: "app-features-section",
    imports: [BadgeComponent, CardComponent],
    templateUrl: "./features-section.component.html",
    styleUrl: "./features-section.component.css",
})
export class FeaturesSectionComponent {}
