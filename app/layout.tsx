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
        <html lang="en" data-oid="sp1g30x">
            <body className={inter.className} data-oid="thm5eca">
                <Header data-oid="l-zwqm:" />
                <main className="min-h-screen pt-16" data-oid="eo:h5tf">
                    {children}
                </main>
                <Footer data-oid="fs12w32" />
            </body>
        </html>
    );
}
