import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./features/landing/home/home.component").then((m) => m.HomeComponent),
        title: "Pawsitive - Complete Pet Care",
    },
];
