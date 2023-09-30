import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import ClientLayout from '@/components/shared/layout';
import 'aos/dist/aos.css';
import { Metadata } from 'next';
import AppContextProvider from '../context/GlobalContext';
import '../styles/globals.css';

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
      <body>
        <AppContextProvider>
          <Navbar />
          <ClientLayout>
            <div className="mt-16 lg:mt-20 min-h-screen">{children}</div>
          </ClientLayout>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
