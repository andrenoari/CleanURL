import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CleanURL - Clean your URLs from tracking parameters',
    description: 'Simplifying URLs for a cleaner web experience.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
