import { Component, EventEmitter, Input, Output, type AfterContentInit } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
    selector: "app-button",
    imports: [CommonModule],
    styleUrl: "./button.component.css",
    template: ` <button
        [attr.type]="buttonType"
        [attr.size]="buttonSize"
        [attr.variant]="buttonVariant"
        [attr.disabled]="buttonDisabled ? true : null"
        [attr.aria-label]="buttonAriaLabel"
        [class.loading]="buttonLoading"
        class="app-button"
        [ngClass]="{
            'app-button-xs': buttonSize === 'xs',
            'app-button-sm': buttonSize === 'sm',
            'app-button-md': buttonSize === 'md',
            'app-button-lg': buttonSize === 'lg',
            'app-button-primary': buttonVariant === 'primary',
            'app-button-secondary': buttonVariant === 'secondary',
            'app-button-tertiary': buttonVariant === 'tertiary',
            'app-button-disabled': buttonDisabled,
            'app-button-loading': buttonLoading,
            'app-button-icon-left': buttonIconPosition === 'left',
            'app-button-icon-right': buttonIconPosition === 'right',
        }"
        (click)="onClick($event)"
    >
        <ng-content></ng-content>
    </button>`,
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
    @Output() buttonClick = new EventEmitter<MouseEvent>();

    buttonLabel: string | null = null;
    buttonIcon: string | null = null;
    buttonIconPosition: "left" | "right" = "left";
    buttonAriaLabel: string | null = null;
    buttonType: "button" | "submit" | "reset" = "button";
    buttonSize: "xs" | "sm" | "md" | "lg" = "md";
    buttonVariant: "primary" | "secondary" | "tertiary" = "primary";
    buttonDisabled = false;
    buttonLoading = false;

    onClick(event: MouseEvent): void {
        if (!this.buttonDisabled && !this.buttonLoading) {
            this.buttonClick.emit(event);
        }
    }

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
