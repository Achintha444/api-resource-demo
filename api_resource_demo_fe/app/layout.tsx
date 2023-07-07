import { ThemeProvider } from '@/utils/theme/muiLib';
import '../styles/globals.css';

import MainGrid from '@/utils/common/mainGrid';
import { appTheme } from '@/utils/theme/theme';
import Theme from '@/utils/theme/themeProvider';

export const metadata = {
    title: 'Issue Viewer',
    description: 'Demo application to demo API resources capabilities of Asgardeo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Theme>
                <body>
                    <MainGrid>
                        {children}
                    </MainGrid>
                </body>
            </Theme>
        </html>
    )
}
