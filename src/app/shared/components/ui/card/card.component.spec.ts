import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardComponent } from "./card.component";
import { QueryList, ElementRef } from "@angular/core";

describe("CardComponent", () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
    it("should initialize with no card header, footer, content, or description", () => {
        expect(component.hasCardHeader).toBeFalse();
        expect(component.hasCardFooter).toBeFalse();
        expect(component.hasCardContent).toBeFalse();
        expect(component.hasCardDescription).toBeFalse();
    });
    it("should detect card header presence", () => {
        component.cardHeader = new QueryList<ElementRef>();
        component.cardHeader.reset([new ElementRef(document.createElement("div"))]);
        component.ngAfterContentInit();
        expect(component.hasCardHeader).toBeTrue();
    });
});
