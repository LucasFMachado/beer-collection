import Footer from '@/components/Footer'
import '../styles/global.scss'

import Header from '@/components/Header'
import { ContextProvider } from '@/contexts'

export const metadata = {
  title: 'Beer Collection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  )
}
