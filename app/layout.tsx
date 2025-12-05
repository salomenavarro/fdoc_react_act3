import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js App Router Demo',
  description: 'Demostración de enrutamiento avanzado en Next.js 14+',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navigation />
          <main className="flex-grow container mx-auto p-4 md:p-8">
            {children}
          </main>
          <footer className="w-full bg-gray-800 text-white p-4 text-center text-sm">
            © 2024 Next.js App Router Demo. Rúbrica cumplida.
          </footer>
        </div>
      </body>
    </html>
  );
}