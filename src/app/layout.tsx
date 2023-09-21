import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AppContextProvider from '../context/GlobalContext';
import '../styles/globals.css';

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
          <div className="mt-16 lg:mt-20 h-screen">{children}</div>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
