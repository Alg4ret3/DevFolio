import './globals.css';
import type { Metadata } from 'next';
import { Orbitron, Poppins } from 'next/font/google';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '700', '900']
});

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Portfolio | Futuristic Developer',
  description: 'Desarrollador Full Stack especializado en tecnologías modernas y experiencias digitales innovadoras',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${orbitron.variable} ${poppins.variable} bg-black text-white min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}