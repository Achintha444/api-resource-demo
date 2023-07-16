import { icons } from "@/utils/theme/icons";

export interface NavBarItem {
    key: string;
    name: string;
    icon: keyof typeof icons;
    requiredScopes: string[];
    path: string;
}

export interface ProfileItem {
    key: string;
    name: string;
}
