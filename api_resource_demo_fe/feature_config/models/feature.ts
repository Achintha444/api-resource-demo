export interface FeatureScope {
    create: string[];
    view: string[];
}

export interface Feature {
    issue : FeatureScope;
}