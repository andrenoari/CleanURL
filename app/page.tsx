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

                <div className="w-full max-w-2xl mx-auto bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl p-6 mt-8 border border-gray-200/50 dark:border-gray-700/50">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">What We Remove</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 text-gray-700 dark:text-gray-200 text-center hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 text-sm">
                            UTM Parameters
                        </div>
                        <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 text-gray-700 dark:text-gray-200 text-center hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 text-sm">
                            Facebook Click ID
                        </div>
                        <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 text-gray-700 dark:text-gray-200 text-center hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 text-sm">
                            Google Click ID
                        </div>
                        <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 text-gray-700 dark:text-gray-200 text-center hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 text-sm">
                            Google Analytics
                        </div>
                        <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 text-gray-700 dark:text-gray-200 text-center hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 text-sm">
                            Instagram Share ID
                        </div>
                        <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 text-gray-700 dark:text-gray-200 text-center hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 text-sm">
                            Reference Tags
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-2xl mx-auto grid md:grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Why Clean URLs?</h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-left">
                            <p>URLs often contain tracking parameters that:</p>
                            <ul className="list-none space-y-3">
                                <li className="flex items-center space-x-3 group">
                                    <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-200/50 dark:border-gray-700/50 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Make links unnecessarily long</span>
                                </li>
                                <li className="flex items-center space-x-3 group">
                                    <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-200/50 dark:border-gray-700/50 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Reveal your traffic source</span>
                                </li>
                                <li className="flex items-center space-x-3 group">
                                    <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-200/50 dark:border-gray-700/50 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Track your online behavior</span>
                                </li>
                                <li className="flex items-center space-x-3 group">
                                    <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-200/50 dark:border-gray-700/50 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Clutter your shared links</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm italic">Our URL cleaner helps protect your privacy and creates cleaner, more professional-looking links for sharing.</p>
                        </div>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">How It Works</h2>
                        <div className="space-y-4 text-left">
                            <div className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg flex items-center justify-center font-semibold border border-blue-400/50 group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 pt-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Paste your URL into the input field above</p>
                            </div>
                            <div className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg flex items-center justify-center font-semibold border border-blue-400/50 group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 pt-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    Our system automatically identifies and removes tracking parameters
                                </p>
                            </div>
                            <div className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg flex items-center justify-center font-semibold border border-blue-400/50 group-hover:scale-110 transition-transform">
                                    3
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 pt-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Copy your clean URL with one click and share it anywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
