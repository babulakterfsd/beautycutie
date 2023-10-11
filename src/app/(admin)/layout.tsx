import AppContextProvider from '@/context/GlobalContext';
import DashboardLayout from '@/lib/layoutes/DashboardLayoute';
import 'aos/dist/aos.css';
import { Metadata } from 'next';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Bookitu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Bookitu</title>
      <body suppressHydrationWarning={true}>
        <AppContextProvider>
          <DashboardLayout>{children}</DashboardLayout>
        </AppContextProvider>
      </body>
    </html>
  );
}
