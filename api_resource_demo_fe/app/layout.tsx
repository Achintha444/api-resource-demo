import '../styles/globals.css';

import MainGrid from '@/utils/common/mainGrid';

export const metadata = {
  title: 'Issue Viewer',
  description: 'Demo application to demo API resources capabilities of Asgardeo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
            <MainGrid>
                { children }
            </MainGrid>
        </body>
    </html>
  )
}
