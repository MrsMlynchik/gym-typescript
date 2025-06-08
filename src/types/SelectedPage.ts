import type { JSX } from "react";

export type SelectedPage = "home" | "benefits" | "ourclasses" | "contactus";

export interface BenefitType{
    icon: JSX.Element;
    title:string;
    description: string;
}

export interface ClassType{
    name: string;
    description?: string;
    image: string;
}