'use client';

import { useState } from 'react';

export default function UrlCleaner() {
    const [inputUrl, setInputUrl] = useState('');
    const [cleanedUrl, setCleanedUrl] = useState('');
    const [copied, setCopied] = useState(false);

    const cleanUrl = () => {
        try {
            const url = new URL(inputUrl);
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
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                        <p className="text-gray-900 dark:text-white truncate flex-1 mr-4">{cleanedUrl}</p>
                        <button
                            onClick={copyToClipboard}
                            className="px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
