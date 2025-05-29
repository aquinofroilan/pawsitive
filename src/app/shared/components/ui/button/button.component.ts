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
        this.buttonType = this.type;
        this.buttonSize = this.size;
        this.buttonVariant = this.variant;
        this.buttonDisabled = this.disabled;
        this.buttonLoading = this.loading;
        this.buttonIcon = this.icon;
        this.buttonIconPosition = this.iconPosition;
        this.buttonAriaLabel = this.ariaLabel;
        this.buttonLabel = this.label;
    }
}
