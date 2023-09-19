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
      <body className="h-screen flex justify-center items-center text-white bg-black">
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
