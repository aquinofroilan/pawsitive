import { Component, ContentChildren, type QueryList, type AfterContentInit, type ElementRef } from "@angular/core";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"],
    standalone: true,
})
export class CardComponent implements AfterContentInit {
    @ContentChildren("cardHeader") cardHeader!: QueryList<ElementRef>;
    @ContentChildren("cardFooter") cardFooter!: QueryList<ElementRef>;
    @ContentChildren("cardContent") cardContent!: QueryList<ElementRef>;
    @ContentChildren("cardDescription") cardDescription!: QueryList<ElementRef>;

    hasCardHeader = false;
    hasCardFooter = false;
    hasCardContent = false;
    hasCardDescription = false;

    ngAfterContentInit(): void {
        this.hasCardHeader = this.cardHeader.length > 0;
        this.hasCardFooter = this.cardFooter.length > 0;
        this.hasCardContent = this.cardContent.length > 0;
        this.hasCardDescription = this.cardDescription.length > 0;
    }
}
