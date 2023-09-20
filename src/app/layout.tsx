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
          <div className="h-screen flex justify-center items-center">
            {children}
          </div>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
