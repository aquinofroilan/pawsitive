import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./features/pages/landing/landing.component").then((m) => m.LandingComponent),
        title: "Pawsitive - Complete Pet Care",
    },
];
