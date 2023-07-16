import config from '../config.json';
import { Feature } from './models/feature';

export class FeatureConfig {
  
    private constructor() {};

    public static getBaseOrganizationUrl = (): string => config.AuthorizationConfig.BaseOrganizationUrl;

    public static getBaseHostedUrl = (): string => config.ApplicationConfig.HostedUrl;

    public static getClientId = (): string => config.ApplicationConfig.ClientId;

    public static getClientSecret = (): string => config.ApplicationConfig.ClientSecret;

    public static getScopes = (): string[] => config.ApplicationConfig.APIScopes;

    public static features: Feature = {
        issue: config.Features.Issues.scopes
    }
}
