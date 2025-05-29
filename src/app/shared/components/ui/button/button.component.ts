import { Component, Input, type AfterContentInit } from "@angular/core";

@Component({
    selector: "app-button",
    imports: [],
    templateUrl: "./button.component.html",
    styleUrl: "./button.component.css",
})
export class ButtonComponent implements AfterContentInit {
    @Input() size: "xs" | "sm" | "md" | "lg" = "md";
    @Input() variant: "primary" | "secondary" | "tertiary" = "primary";
    @Input() disabled = false;
    @Input() loading = false;
    @Input() type: "button" | "submit" | "reset" = "button";
    // TODO: Infer the type of the icon based on the icon library used
    @Input() icon: string | null = null;
    @Input() iconPosition: "left" | "right" = "left";
    @Input() ariaLabel: string | null = null;
    @Input() label: string | null = null;

    buttonLabel: string | null = null;
    buttonIcon: string | null = null;
    buttonIconPosition: "left" | "right" = "left";
    buttonAriaLabel: string | null = null;
    buttonType: "button" | "submit" | "reset" = "button";
    buttonSize: "xs" | "sm" | "md" | "lg" = "md";
    buttonVariant: "primary" | "secondary" | "tertiary" = "primary";
    buttonDisabled = false;
    buttonLoading = false;

    ngAfterContentInit(): void {
        if (this.label === null && this.icon === null) {
            throw new Error("Button must have either a label or an icon.");
        }
        if (this.icon !== null && !this.ariaLabel) {
            throw new Error("Button with an icon must have an aria-label.");
        }
        if (this.iconPosition !== "left" && this.iconPosition !== "right") {
            throw new Error("Button icon position must be either 'left' or 'right'.");
        }

        this.label = this.label || null;
        this.icon = this.icon || null;
        this.iconPosition = this.iconPosition || "left";
        this.ariaLabel = this.ariaLabel || null;
        this.type = this.type || "button";
        this.size = this.size || "md";
        this.variant = this.variant || "primary";
        this.disabled = this.disabled || false;
        this.loading = this.loading || false;
    }
}
