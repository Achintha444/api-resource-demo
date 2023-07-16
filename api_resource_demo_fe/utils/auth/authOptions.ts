import { FeatureConfig } from '@/feature_config/featureConfig';
import { NextAuthOptions } from 'next-auth';

/**
 * Provider options for Asgardeo.
 */
export const asgardeoProviderOptions: NextAuthOptions = {

    callbacks: {

        async jwt({ token, account, profile }) {

            if (account) {
                token.accessToken = account.access_token;
                token.idToken = account.id_token;
                token.scope = account.scope;
                token.user = profile;
            }

            return token;
        },
        async redirect({ baseUrl }) {
            
            return `${baseUrl}/getting_started`;
        },

    },
    cookies: {
        pkceCodeVerifier: {
            name: "next-auth.pkce.code_verifier",
            options: {
                httpOnly: true,
                sameSite: "none",
                path: "/",
                secure: true,
            },
        },
    },
    debug: true,
    providers: [
        {
            authorization: {
                params: {
                    scope: FeatureConfig.getScopes().join(' ')
                }
            },
            clientId: FeatureConfig.getClientId(),
            clientSecret: FeatureConfig.getClientSecret(),
            id: 'apiResourceDemo',
            name: 'apiResourceDemo',
            profile(profile) {

                return {
                    id: profile.sub
                };
            },
            type: 'oauth',
            checks: ["pkce"],
            userinfo: `${FeatureConfig.getBaseOrganizationUrl()}/oauth2/userinfo`,
            wellKnown: `${FeatureConfig.getBaseOrganizationUrl()}/oauth2/token/.well-known/openid-configuration`
        }
    ],
    secret: process.env.SECRET
};

