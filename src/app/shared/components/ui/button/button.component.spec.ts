import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";

describe("ButtonComponent", () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
    it("should have default button type as button", () => {
        expect(component.buttonType).toBe("button");
    });
    it("should have default button size as md", () => {
        expect(component.buttonSize).toBe("md");
    });
    it("should have default button variant as primary", () => {
        expect(component.buttonVariant).toBe("primary");
    });
    it("should have default button disabled as false", () => {
        expect(component.buttonDisabled).toBeFalse();
    });
    it("should have default button loading as false", () => {
        expect(component.buttonLoading).toBeFalse();
    });
    it("should have default button icon as null", () => {
        expect(component.buttonIcon).toBeNull();
    });
    it("should have default button icon position as left", () => {
        expect(component.buttonIconPosition).toBe("left");
    });
    it("should have default button aria label as null", () => {
        expect(component.buttonAriaLabel).toBeNull();
    });
    it("should have default button label as null", () => {
        expect(component.buttonLabel).toBeNull();
    });

    it("should emit buttonClick event when clicked", () => {
        spyOn(component.buttonClick, "emit");
        const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector("button");
        buttonElement.click();
        expect(component.buttonClick.emit).toHaveBeenCalled();
    });

    it("should not emit buttonClick when disabled", () => {
        component.disabled = true;
        component.ngAfterContentInit(); // Update internal state
        fixture.detectChanges();

        spyOn(component.buttonClick, "emit");
        const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector("button");

        buttonElement.click();

        expect(component.buttonClick.emit).not.toHaveBeenCalled();
    });

    it("should not emit buttonClick when loading", () => {
        component.loading = true;
        component.ngAfterContentInit(); // Update internal state
        fixture.detectChanges();

        spyOn(component.buttonClick, "emit");
        const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector("button");

        buttonElement.click();

        expect(component.buttonClick.emit).not.toHaveBeenCalled();
    });
});
