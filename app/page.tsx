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
        <div
            className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-200 flex-col p-4"
            data-oid="w6n91kb"
        >
            <div className="max-w-4xl mx-auto text-center space-y-8" data-oid="a8ry_h:">
                <div className="space-y-4" data-oid="1z558:m">
                    <h1
                        className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
                        data-oid=":_22w.6"
                    >
                        Clean
                        <span className="text-blue-600 dark:text-blue-500" data-oid="kw2lb13">
                            URL
                        </span>
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        data-oid="6kdfek2"
                    >
                        Remove tracking parameters and clean up your URLs instantly
                    </p>
                </div>

                <div className="space-y-6 w-full max-w-2xl mx-auto" data-oid="bie4ado">
                    <div className="flex flex-col space-y-4" data-oid="8qo6oqp">
                        <div className="relative" data-oid="ep2bi-2">
                            <input
                                type="url"
                                value={inputUrl}
                                onChange={(e) => setInputUrl(e.target.value)}
                                placeholder="Paste your URL here..."
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                data-oid="eaa7_m."
                            />

                            <button
                                onClick={cleanUrl}
                                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                                data-oid="ls2et.w"
                            >
                                Clean
                            </button>
                        </div>

                        {cleanedUrl && (
                            <div className="relative" data-oid="n5nvcf8">
                                <div
                                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                                    data-oid="1gvh60j"
                                >
                                    <p
                                        className="text-gray-800 dark:text-gray-200 break-all text-left"
                                        data-oid="84crpt2"
                                    >
                                        {cleanedUrl}
                                    </p>
                                </div>
                                <button
                                    onClick={copyToClipboard}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                                    data-oid="z5g7vhe"
                                >
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8" data-oid="yr1igq8">
                    <h2
                        className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                        data-oid="a74u_::"
                    >
                        What We Remove
                    </h2>
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-600 dark:text-gray-300"
                        data-oid="z8xcdup"
                    >
                        <div data-oid="f_r2t27">UTM Parameters</div>
                        <div data-oid="4t0p-25">Facebook Click ID</div>
                        <div data-oid="9as2rd6">Google Click ID</div>
                        <div data-oid="qrthlv4">Google Analytics</div>
                        <div data-oid="qu_3c5r">Instagram Share ID</div>
                        <div data-oid="h9tf7:f">Reference Tags</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12" data-oid="cv77_:h">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6" data-oid="3ptqwnk">
                        <h2
                            className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
                            data-oid="bi__s4s"
                        >
                            Why Clean URLs?
                        </h2>
                        <div
                            className="space-y-4 text-gray-600 dark:text-gray-300 text-left"
                            data-oid="-0-o7to"
                        >
                            <p data-oid=":xg2oxv">URLs often contain tracking parameters that:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4" data-oid="gd3s-z0">
                                <li data-oid="hgq0l:8">Make links unnecessarily long</li>
                                <li data-oid="2q1t1oo">Reveal your traffic source</li>
                                <li data-oid="t0g::yl">Track your online behavior</li>
                                <li data-oid="83z495a">Clutter your shared links</li>
                            </ul>
                            <p data-oid="fa:86hv">
                                Our URL cleaner helps protect your privacy and creates cleaner, more
                                professional-looking links for sharing.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6" data-oid="afn7-4o">
                        <h2
                            className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center"
                            data-oid="3ty2lu0"
                        >
                            How It Works
                        </h2>
                        <div className="space-y-4 text-left" data-oid="d:zrqub">
                            <div className="flex items-start gap-3" data-oid="is12fke">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold"
                                    data-oid="t_18189"
                                >
                                    1
                                </div>
                                <p className="text-gray-600 dark:text-gray-300" data-oid="wt-1o3q">
                                    Paste your URL into the input field above
                                </p>
                            </div>
                            <div className="flex items-start gap-3" data-oid="e3y7qzi">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold"
                                    data-oid="nxzt10g"
                                >
                                    2
                                </div>
                                <p className="text-gray-600 dark:text-gray-300" data-oid="zlzmnf2">
                                    Our system automatically identifies and removes tracking
                                    parameters
                                </p>
                            </div>
                            <div className="flex items-start gap-3" data-oid="u8x2cs6">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold"
                                    data-oid="42aa8eb"
                                >
                                    3
                                </div>
                                <p className="text-gray-600 dark:text-gray-300" data-oid="9gcif0o">
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
