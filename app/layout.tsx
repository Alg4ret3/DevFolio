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
  title: 'Sergio Muñoz | Full Stack Developer',
  description: 'Desarrollador Full Stack especializado en tecnologías modernas y experiencias digitales innovadoras',
  themeColor: '#000000',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  }
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
