import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import config from '../../../../config.json';

/**
 * 
 * @param req - request body
 * @param res - response body
 * 
 * @returns IS provider that will handle the sign in process. Used in `orgSignin()`
 * [Use this method to signin].
 */
const asgardeoProvider = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, {

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
        async session({ session, token }) {

            console.log('session', session);
            console.log('token', token);

            return session;
        }

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
                    scope: config.ApplicationConfig.APIScopes.join(' ')
                }
            },
            clientId: config.ApplicationConfig.ClientId,
            clientSecret: config.ApplicationConfig.ClientSecret,
            id: 'apiResourceDemo',
            name: 'apiResourceDemo',
            profile(profile) {

                return {
                    id: profile.sub
                };
            },
            type: 'oauth',
            checks: ["pkce"],
            userinfo: `${config.AuthorizationConfig.BaseOrganizationUrl}/oauth2/userinfo`,
            wellKnown: `${config.AuthorizationConfig.BaseOrganizationUrl}/oauth2/token/.well-known/openid-configuration`
        }
    ],
    secret: process.env.SECRET
});

export { asgardeoProvider as GET, asgardeoProvider as POST }; 
