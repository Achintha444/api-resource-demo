import config from '../config.json';
import { Feature } from './models/feature';

export class FeatureConfig {
  
    private constructor() {};

    public static getBaseOrganizationUrl = (): string => config.AuthorizationConfig.BaseOrganizationUrl;

    public static getBaseHostedUrl = (): string => config.ApplicationConfig.HostedUrl;

    public static getClientId = (): string => config.ApplicationConfig.ClientId;

    public static getClientSecret = (): string => config.ApplicationConfig.ClientSecret;

    public static getScopes = (): string[] => {

        const apiScopes: string[] = config.ApplicationConfig.APIScopes;
        const issuesViewScopes: string[] = config.Features.Issues.scopes.view;
        const issuesCreateScopes: string[] = config.Features.Issues.scopes.create;

        return [...apiScopes, ...issuesViewScopes, ...issuesCreateScopes];
    }

    public static getBackendUrl = (): string => config.ApplicationConfig.BackendUrl;

    public static features: Feature = {
        issue: config.Features.Issues.scopes
    }
}
