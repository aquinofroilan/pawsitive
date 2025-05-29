import { Component, Input, type AfterContentInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-input",
    imports: [CommonModule],
    styleUrl: "./input.component.css",
    template: `
        <input
            [class]="inputError ? 'input-error' : ''"
            [type]="inputType"
            [placeholder]="inputPlaceholder"
            [value]="inputValue"
            [disabled]="inputDisabled"
            [required]="inputRequired"
            [readonly]="inputReadonly"
            [ngClass]="inputSize"
        />
    `,
})
export class InputComponent implements AfterContentInit {
    @Input() type: "text" | "email" | "password" | "number" | "tel" = "text";
    @Input() placeholder: string | null = null;
    @Input() value: string | null = null;
    @Input() disabled = false;
    @Input() required = false;
    @Input() readonly = false;
    @Input() size: "xs" | "sm" | "md" | "lg" = "md";
    @Input() error: string | null = null;

    inputType: "text" | "email" | "password" | "number" | "tel" = "text";
    inputPlaceholder: string | null = null;
    inputValue: string | null = null;
    inputDisabled = false;
    inputRequired = false;
    inputReadonly = false;
    inputSize: "xs" | "sm" | "md" | "lg" = "md";
    inputError: string | null = null;

    ngAfterContentInit(): void {
        this.inputType = this.type;
        this.inputPlaceholder = this.placeholder;
        this.inputValue = this.value;
        this.inputDisabled = this.disabled;
        this.inputRequired = this.required;
        this.inputReadonly = this.readonly;
        this.inputSize = this.size;
        this.inputError = this.error;
    }
}
