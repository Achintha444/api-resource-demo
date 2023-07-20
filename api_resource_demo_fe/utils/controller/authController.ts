import { signIn, signOut } from "next-auth/react"

export class AuthController {

    private constructor() {};

    public static signIn = async (): Promise<void> => {
        signIn("apiResourceDemo", { callbackUrl: `/getting_started` }) 
    }

    public static signOut = async (): Promise<void> => {
        signOut({ callbackUrl: `/` })
    }
}