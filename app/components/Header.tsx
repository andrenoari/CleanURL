'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (
                localStorage.theme === 'dark' ||
                (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
                setTheme('dark');
                document.documentElement.classList.add('dark');
            } else {
                setTheme('light');
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <header className="fixed w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 backdrop-blur-md z-50 border-b border-transparent dark:border-transparent shadow-lg">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center space-x-3">
                        <img src="/logo.png" alt="Logo" className="h-10 w-10" />
                        <span className="text-2xl font-extrabold text-white dark:text-gray-200">
                            Modern<span className="text-yellow-300">Site</span>
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-white dark:text-gray-300 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors"
                            title={
                                theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
                            }
                        >
                            {theme === 'light' ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            )}
                        </button>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-white dark:text-gray-300 hover:text-yellow-300 dark:hover:text-yellow-300 transition-colors"
                            title="View on GitHub"
                        >
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
