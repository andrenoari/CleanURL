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
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Clean<span className={styles.highlight}>URL</span>
        </h1>
        <p className={styles.subtitle}>
          Remove tracking parameters and clean up your URLs instantly
        </p>

        <div className={styles.inputContainer}>
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Paste your URL here..."
            className={styles.input}
          />
          <button onClick={cleanUrl} className={styles.button}>
            Clean
          </button>
        </div>

        <div className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <div className={styles.features}>
              <h2>What We Remove</h2>
              <div className={styles.featureGrid}>
                <div className={styles.feature}>UTM Parameters</div>
                <div className={styles.feature}>Facebook Click ID</div>
                <div className={styles.feature}>Google Analytics</div>
                <div className={styles.feature}>Instagram Share ID</div>
                <div className={styles.feature}>Google Click ID</div>
                <div className={styles.feature}>Reference Tags</div>
              </div>
            </div>
          </div>

          <div className={styles.howItWorks}>
            <div>
              <h2>Why Clean URLs?</h2>
              <ul className={styles.reasonsList}>
                <li>Make links unnecessarily long</li>
                <li>Reveal your traffic source</li>
                <li>Track your online behavior</li>
                <li>Clutter your shared links</li>
              </ul>
              <p className={styles.note}>
                Our URL cleaner helps protect your privacy and creates cleaner, more professional-looking links for sharing.
              </p>
            </div>

            <div>
              <h2>How It Works</h2>
              <ol className={styles.stepsList}>
                <li>Paste your URL into the input field above</li>
                <li>Our system automatically identifies and removes tracking parameters</li>
                <li>Copy your clean URL with one click and share it anywhere</li>
              </ol>
            </div>
          </div>
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
    </main>
  );
};

export default HomePage;
