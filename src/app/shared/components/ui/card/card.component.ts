import { Component } from "@angular/core";

@Component({
    selector: "app-card",
    styleUrls: ["./card.component.css"],
    standalone: true,
    template: `
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <ng-content></ng-content>
        </div>
    `,
})
export class CardComponent {}
