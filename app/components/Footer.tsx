import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
            data-oid="fslf_vo"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="d3gtqo-">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="8bwkhuc">
                    {/* Brand Column */}
                    <div className="space-y-4" data-oid="ue-b:4x">
                        <h3
                            className="text-lg font-bold text-gray-900 dark:text-white"
                            data-oid="ze:6hxs"
                        >
                            YourBrand
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300" data-oid="qblv78p">
                            Building the future, one pixel at a time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div data-oid="4c4y4g9">
                        <h3
                            className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4"
                            data-oid="u6elh4k"
                        >
                            Quick Links
                        </h3>
                        <ul className="space-y-3" data-oid="4nheuu6">
                            <li data-oid="74-hp-a">
                                <Link
                                    href="/about"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    data-oid="fivanmv"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li data-oid="guxf3ht">
                                <Link
                                    href="/services"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    data-oid="clu7jw5"
                                >
                                    Services
                                </Link>
                            </li>
                            <li data-oid="5gp0wrz">
                                <Link
                                    href="/contact"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    data-oid="to8x-tc"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div data-oid="3cpbst.">
                        <h3
                            className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4"
                            data-oid="v5br-62"
                        >
                            Legal
                        </h3>
                        <ul className="space-y-3" data-oid="m6dlr6k">
                            <li data-oid="vqog.6q">
                                <Link
                                    href="/privacy"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    data-oid="y7thcwb"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li data-oid="ovlfvyi">
                                <Link
                                    href="/terms"
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    data-oid="3p6w1d3"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div data-oid="anzjf0b">
                        <h3
                            className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4"
                            data-oid="gz_yftq"
                        >
                            Connect With Us
                        </h3>
                        <div className="flex space-x-6" data-oid="1rzyh:t">
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                data-oid="9yajfd4"
                            >
                                <span className="sr-only" data-oid="2cfxoyw">
                                    Twitter
                                </span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="7iyeo7v"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="48qbdj6"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                data-oid=".n7dpr0"
                            >
                                <span className="sr-only" data-oid="v2eq:t3">
                                    GitHub
                                </span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="fby20gc"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                        data-oid="ns89l-g"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
                    data-oid="fc-w3a-"
                >
                    <p className="text-gray-400 text-sm text-center" data-oid="oz_dsh:">
                        © {new Date().getFullYear()} YourBrand. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
