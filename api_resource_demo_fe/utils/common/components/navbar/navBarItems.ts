import { FeatureConfig } from "@/feature_config/featureConfig";
import { NavBarItem, ProfileItem } from "../../models/navBar";

export const navBarItems: NavBarItem[] = [
    {
        key: 'getting_started',
        name: 'Getting Started',
        icon: 'Home',
        requiredScopes: [],
        path: '/getting_started'
    },
    {
        key: 'view_issues',
        name: 'View Issues',
        icon: 'InsertDriveFile',
        requiredScopes: FeatureConfig.features.issue.view,
        path: '/view_issues'
    },
    {
        key: 'create_issue',
        name: 'Create Issue',
        icon: 'NoteAdd',
        requiredScopes: FeatureConfig.features.issue.view,
        path: '/create_issue'
    }
];

export const profileItems: ProfileItem[] = [ 
    {
        key: 'sign_out',
        name: 'Sign Out'
    }
];
