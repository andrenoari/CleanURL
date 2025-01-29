import UrlCleaner from './components/UrlCleaner';

export default function Home() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-200 flex-col p-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                        Clean<span className="text-blue-600 dark:text-blue-500">URL</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Remove tracking parameters and clean up your URLs instantly
                    </p>
                </div>

                <UrlCleaner />

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What We Remove</h2>
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
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Why Clean URLs?</h2>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300 text-left">
                            <p>URLs often contain tracking parameters that:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Make links unnecessarily long</li>
                                <li>Reveal your traffic source</li>
                                <li>Track your online behavior</li>
                                <li>Clutter your shared links</li>
                            </ul>
                            <p>Our URL cleaner helps protect your privacy and creates cleaner, more professional-looking links for sharing.</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">How It Works</h2>
                        <div className="space-y-4 text-left">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                    1
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">Paste your URL into the input field above</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                    2
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Our system automatically identifies and removes tracking parameters
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                    3
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">Copy your clean URL with one click and share it anywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
