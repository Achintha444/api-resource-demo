import AuthProvider from '@/utils/auth/authProvider';
import '../styles/globals.css';

import MainGrid from '@/utils/common/components/mainGrid';
import Theme from '@/utils/theme/themeProvider';

export const metadata = {
    title: 'Issue Viewer',
    description: 'Demo application to demo API resources capabilities of Asgardeo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <AuthProvider>
                <Theme>
                    <body>
                        <MainGrid>
                            {children}
                        </MainGrid>
                    </body>
                </Theme>
            </AuthProvider>
        </html>
    )
}
