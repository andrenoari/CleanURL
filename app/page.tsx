'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

const HomePage = () => {
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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Clean URL</h1>
        <p className={styles.subtitle}>Remove tracking parameters and clean up your URLs instantly</p>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.features}>
          <h2>How It Works</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Paste your URL into the input field above
                </p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Our system automatically identifies and removes tracking parameters
                </p>
              </div>
            </div>
            <div className={styles.featureItem}>
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
        </section>
        <section className={styles.features}>
          <h2>What We Remove</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>UTM Parameters</div>
            <div className={styles.featureItem}>Facebook Click ID</div>
            <div className={styles.featureItem}>Google Click ID</div>
            <div className={styles.featureItem}>Google Analytics</div>
            <div className={styles.featureItem}>Instagram Share ID</div>
            <div className={styles.featureItem}>Reference Tags</div>
          </div>
        </section>
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
      </main>
      <footer className={styles.footer}> 
        <p> 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
