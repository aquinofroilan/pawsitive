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
    it("should set button type correctly", () => {
        component.type = "submit";
        component.ngAfterContentInit();
        expect(component.buttonType).toBe("submit");
    });
    it("should set button size correctly", () => {
        component.size = "lg";
        component.ngAfterContentInit();
        expect(component.buttonSize).toBe("lg");
    });
    it("should set button variant correctly", () => {
        component.variant = "secondary";
        component.ngAfterContentInit();
        expect(component.buttonVariant).toBe("secondary");
    });
    it("should set button disabled correctly", () => {
        component.disabled = true;
        component.ngAfterContentInit();
        expect(component.buttonDisabled).toBeTrue();
    });
    it("should set button loading correctly", () => {
        component.loading = true;
        component.ngAfterContentInit();
        expect(component.buttonLoading).toBeTrue();
    });
    it("should set button icon correctly", () => {
        component.icon = "test-icon";
        component.ngAfterContentInit();
        expect(component.buttonIcon).toBe("test-icon");
    });
    it("should set button icon position correctly", () => {
        component.iconPosition = "right";
        component.ngAfterContentInit();
        expect(component.buttonIconPosition).toBe("right");
    });
    it("should set button aria label correctly", () => {
        component.ariaLabel = "test-aria-label";
        component.ngAfterContentInit();
        expect(component.buttonAriaLabel).toBe("test-aria-label");
    });
    it("should set button label correctly", () => {
        component.label = "Test Button";
        component.ngAfterContentInit();
        expect(component.buttonLabel).toBe("Test Button");
    });
});
