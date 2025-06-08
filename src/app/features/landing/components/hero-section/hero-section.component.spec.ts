import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroSectionComponent } from "./hero-section.component";
import { ActivatedRoute } from "@angular/router";

describe("HeroSectionComponent", () => {
    let component: HeroSectionComponent;
    let fixture: ComponentFixture<HeroSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeroSectionComponent],
            providers: [{ provide: ActivatedRoute, useValue: { snapshot: { data: {} } } }],
        }).compileComponents();

        fixture = TestBed.createComponent(HeroSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
