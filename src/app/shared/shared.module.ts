import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "./components/ui/logo/logo.component";
import { InputComponent } from "./components/ui/input/input.component";
import { ButtonComponent } from "./components/ui/button/button.component";
import { CardComponent } from "./components/ui/card/card.component";
import { BadgeComponent } from "./components/ui/badge/badge.component";

@NgModule({
    imports: [CommonModule, LogoComponent, InputComponent, ButtonComponent, CardComponent, BadgeComponent],
    exports: [CommonModule, LogoComponent, InputComponent, ButtonComponent, CardComponent, BadgeComponent],
})
export class SharedModule {}
