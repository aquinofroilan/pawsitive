import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    styleUrl: "./app.component.css",
    template: ` <main class="main min-h-screen w-full"><router-outlet /></main> `,
})
export class AppComponent {
    title = "pawsitive";
}
