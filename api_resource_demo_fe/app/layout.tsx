import ReduxProvider from '@/redux/reduxProvider';
import AuthProvider from '@/utils/auth/authProvider';
import MainGrid from '@/utils/common/components/mainGrid';
import Theme from '@/utils/theme/themeProvider';
import '../styles/globals.css';

export const metadata = {
    title: 'Issue Viewer',
    description: 'Demo application to demo API resources capabilities of Asgardeo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <AuthProvider>
                <ReduxProvider>
                <Theme>
                    <body>
                        <MainGrid>
                            {children}
                        </MainGrid>
                    </body>
                </Theme>
                </ReduxProvider>
            </AuthProvider>
        </html>
    )
}
