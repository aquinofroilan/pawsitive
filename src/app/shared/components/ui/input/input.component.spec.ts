import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InputComponent } from "./input.component";

describe("InputComponent", () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [InputComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
    it("should have default input type as text", () => {
        expect(component.inputType).toBe("text");
    });
    it("should have default input placeholder as null", () => {
        expect(component.inputPlaceholder).toBeNull();
    });
    it("should have default input value as empty string", () => {
        expect(component.inputValue).toBe("");
    });
    it("should have default input disabled as false", () => {
        expect(component.inputDisabled).toBeFalse();
    });
    it("should have default input required as false", () => {
        expect(component.inputRequired).toBeFalse();
    });
    it("should have default input readonly as false", () => {
        expect(component.inputReadonly).toBeFalse();
    });
    it("should have default input size as md", () => {
        expect(component.inputSize).toBe("md");
    });
    it("should have default input error as null", () => {
        expect(component.inputError).toBeNull();
    });
    it("should set input type correctly", () => {
        component.type = "email";
        component.ngAfterContentInit();
        expect(component.inputType).toBe("email");
    });
});
