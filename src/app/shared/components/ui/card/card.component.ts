import { Component, ContentChildren, type QueryList, type AfterContentInit, type ElementRef } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-card",
    imports: [NgIf],
    styleUrls: ["./card.component.css"],
    standalone: true,
    template: `
        <div class="card">
            <header *ngIf="hasCardHeader" class="card-header">
                <ng-content select="[cardHeader]"></ng-content>
                <ng-content select="[cardDescription]"></ng-content>
            </header>
            <ng-content select="[cardContent]"></ng-content>
            <div *ngIf="hasCardContent" class="card-content">
                <ng-content select="[cardContent]"></ng-content>
            </div>
            <footer *ngIf="hasCardFooter" class="card-footer">
                <ng-content select="[cardFooter]"></ng-content>
            </footer>
        </div>
    `,
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
