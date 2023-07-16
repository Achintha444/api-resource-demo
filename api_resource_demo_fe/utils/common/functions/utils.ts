export class Utils {

    private constructor() {};

    public static hasRequiredScopes = (allowedScopes: string[], scopes: string[]): boolean =>
        scopes.every(scope => allowedScopes.includes(scope));
}
