import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import ClientLayout from '@/components/shared/layout';
import AppContextProvider from '@/context/GlobalContext';
import 'aos/dist/aos.css';
import { Metadata } from 'next';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Beautycutie',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Beautycutie</title>
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
