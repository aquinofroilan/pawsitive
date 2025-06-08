import { Component, Input } from "@angular/core";

@Component({
    selector: "app-badge",
    imports: [],
    template: `<span class="badge"><ng-content></ng-content></span>`,
    styleUrl: "./badge.component.css",
})
export class BadgeComponent {
    color = "primary"; // Default color
    customClass = ""; // Default custom class
    @Input() set badgeClass(value: string) {
        this.customClass = value;
    }
    @Input() set badgeColor(value: string) {
        this.color = value;
    }
}
