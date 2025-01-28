'use client';

import { useState } from 'react';

export default function Page() {
    const [inputUrl, setInputUrl] = useState('');
    const [cleanedUrl, setCleanedUrl] = useState('');
    const [copied, setCopied] = useState(false);

    const cleanUrl = () => {
        try {
            const url = new URL(inputUrl);
            // Remove tracking parameters
            const paramsToRemove = [
                'utm_source',
                'utm_medium',
                'utm_campaign',
                'utm_term',
                'utm_content',
                'fbclid',
                'fbid',
                'gclid',
                '_ga',
                'ref',
                'source',
                'mc_cid',
                'mc_eid',
                'igshid',
            ];

            paramsToRemove.forEach((param) => {
                url.searchParams.delete(param);
            });

            setCleanedUrl(url.toString());
        } catch (error) {
            setCleanedUrl('Please enter a valid URL');
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(cleanedUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-200 flex-col p-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                        Clean
                        <span className="text-blue-600 dark:text-blue-500">URL</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Remove tracking parameters and clean up your URLs instantly
                    </p>
                </div>

                <div className="space-y-6 w-full max-w-2xl mx-auto">
                    <div className="flex flex-col space-y-4">
                        <div className="relative">
                            <input
                                type="url"
                                value={inputUrl}
                                onChange={(e) => setInputUrl(e.target.value)}
                                placeholder="Paste your URL here..."
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />

                            <button
                                onClick={cleanUrl}
                                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                            >
                                Clean
                            </button>
                        </div>

                        {cleanedUrl && (
                            <div className="relative">
                                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                    <p className="text-gray-800 dark:text-gray-200 break-all text-left">
                                        {cleanedUrl}
                                    </p>
                                </div>
                                <button
                                    onClick={copyToClipboard}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                                >
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        What We Remove
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div>UTM Parameters</div>
                        <div>Facebook Click ID</div>
                        <div>Google Click ID</div>
                        <div>Google Analytics</div>
                        <div>Instagram Share ID</div>
                        <div>Reference Tags</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Why Clean URLs?
                        </h2>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300 text-left">
                            <p>URLs often contain tracking parameters that:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Make links unnecessarily long</li>
                                <li>Reveal your traffic source</li>
                                <li>Track your online behavior</li>
                                <li>Clutter your shared links</li>
                            </ul>
                            <p>
                                Our URL cleaner helps protect your privacy and creates cleaner, more
                                professional-looking links for sharing.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                            How It Works
                        </h2>
                        <div className="space-y-4 text-left">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                    1
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Paste your URL into the input field above
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                    2
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Our system automatically identifies and removes tracking
                                    parameters
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                    3
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Copy your clean URL with one click and share it anywhere
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
